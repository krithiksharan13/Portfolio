// Vercel Edge Function — the portfolio chat assistant.
// POST { messages: [{ role: "user" | "assistant", content: string }] }
// -> streams back plain-text tokens of the assistant's reply.
//
// Env vars (set in Vercel -> Project Settings -> Environment Variables):
//   GEMINI_API_KEY        (required)  Google AI Studio key
//   VITE_SUPABASE_URL     (already set) used for per-IP rate limiting
//   VITE_SUPABASE_ANON_KEY(already set)
import { PORTFOLIO_CONTEXT } from "./portfolio-context";

export const config = { runtime: "edge" };

const MODEL = "gemini-2.5-flash";
const MAX_MESSAGES = 16; // keep the last N turns
const MAX_CHARS = 2000; // per message
const MAX_OUTPUT_TOKENS = 700;
const RATE_LIMIT = 20; // messages per IP...
const RATE_WINDOW_MIN = 60; // ...per hour

const SYSTEM_PROMPT = `You are the assistant on Krithik Sharan S A's personal portfolio website. You answer questions from visitors — recruiters, collaborators, curious people — about Krithik, his work, projects, experience, education, and background.

Rules:
- Answer only from the knowledge base below. If something isn't covered, say you don't have that detail and suggest they use the contact form or email krithiksharan13@gmail.com.
- Be concise and conversational. A little warmth and light humour is fine; don't overdo it. Prefer 1–3 short paragraphs.
- Speak about Krithik in the third person ("Krithik built…", "he studied…").
- When relevant, point people to the right page: /portfolio, /experience, /education, /certificates, /honours, /volunteering, /contact.
- You may share his email, LinkedIn, GitHub and website. Do not invent phone numbers, addresses, or any detail not in the knowledge base.
- Politely decline anything unrelated to Krithik or his work.

KNOWLEDGE BASE:
${PORTFOLIO_CONTEXT}`;

type ClientMessage = { role: "user" | "assistant"; content: unknown };

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function underRateLimit(ip: string): Promise<boolean> {
  const url = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return true; // rate limiting is best-effort
  try {
    const res = await fetch(`${url}/rest/v1/rpc/chat_quota`, {
      method: "POST",
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        p_ip: ip.slice(0, 64),
        p_max: RATE_LIMIT,
        p_window_minutes: RATE_WINDOW_MIN,
      }),
    });
    if (!res.ok) return true;
    return (await res.json()) === true;
  } catch {
    return true;
  }
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json(
      { error: "The chat assistant isn't configured yet. Try the contact form instead." },
      503,
    );
  }

  let payload: { messages?: ClientMessage[] };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const raw = Array.isArray(payload.messages) ? payload.messages : [];
  const messages = raw
    .filter(
      (m): m is { role: "user" | "assistant"; content: string } =>
        m != null &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return json({ error: "Send a user message." }, 400);
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!(await underRateLimit(ip))) {
    return json(
      { error: "You've hit the message limit for now — please try again later or use the contact form." },
      429,
    );
  }

  const geminiBody = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.6,
      thinkingConfig: { thinkingBudget: 0 },
    },
  };

  const upstream = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`,
    {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify(geminiBody),
    },
  );

  if (!upstream.ok || !upstream.body) {
    return json({ error: "The assistant is having a moment. Please try again." }, 502);
  }

  // Transform Gemini's SSE stream into a plain-text token stream for the client.
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.body!.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      let buffer = "";
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const chunks = buffer.split("\n\n");
          buffer = chunks.pop() ?? "";
          for (const chunk of chunks) {
            const line = chunk.split("\n").find((l) => l.startsWith("data:"));
            if (!line) continue;
            const data = line.slice(5).trim();
            if (!data || data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              const text = parsed?.candidates?.[0]?.content?.parts
                ?.map((p: { text?: string }) => p.text ?? "")
                .join("");
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              /* ignore keep-alives / partials */
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-accel-buffering": "no",
    },
  });
}
