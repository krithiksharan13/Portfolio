import { useEffect, useRef, useState } from "react";
import { Loader2, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AVATAR = "/lovable-uploads/6f80d9a7-6e7c-4703-a7c1-a9470358b9ec.webp";
const AVATAR_WAVE = "/lovable-uploads/788976e7-1c83-4adf-8dbf-06ecde26b348.webp";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm Krithik's assistant — ask me anything about his work, projects, experience or background.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || pending) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        const msg = body?.error ?? "Something went wrong. Please try again or use the contact page.";
        const detail = body?.detail ? `\n\n(${body.upstreamStatus ?? ""} ${String(body.detail).slice(0, 300)})` : "";
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: msg + detail };
          return copy;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
      if (!acc.trim()) {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: "Sorry, I didn't catch that — could you rephrase?",
          };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "I couldn't reach the server. Please try again in a moment.",
        };
        return copy;
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {/* Launcher — Krithik's pixel avatar; waves on hover */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ask about Krithik"
          title="Ask me about Krithik"
          className="group fixed bottom-3 right-3 z-50 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="relative block h-28 w-20 sm:h-32 sm:w-24">
            <img
              src={AVATAR}
              alt=""
              className="absolute inset-0 h-full w-full object-contain drop-shadow-lg transition-opacity duration-200 group-hover:opacity-0"
            />
            <img
              src={AVATAR_WAVE}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-contain opacity-0 drop-shadow-lg transition-opacity duration-200 group-hover:opacity-100"
            />
          </span>
          <span className="pointer-events-none absolute -left-2 top-2 -translate-x-full rounded-lg border border-border/60 bg-card px-2.5 py-1 text-xs font-medium shadow-md opacity-0 transition-opacity group-hover:opacity-100">
            Ask me anything
          </span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Krithik's assistant"
          className="fixed bottom-3 right-3 z-50 flex w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl h-[min(34rem,calc(100vh-5rem))]"
        >
          <header className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
            <img src={AVATAR} alt="" className="h-8 w-8 shrink-0 object-contain" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-tight">Ask about Krithik</p>
              <p className="text-xs text-foreground/50">AI assistant · answers from his portfolio</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-foreground/50 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground/90",
                  )}
                >
                  {m.content ||
                    (pending && i === messages.length - 1 ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      ""
                    ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-end gap-2 border-t border-border/60 p-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              rows={1}
              maxLength={2000}
              placeholder="Ask a question…"
              className="max-h-28 flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button type="submit" size="icon" disabled={pending || !input.trim()} aria-label="Send">
              {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
