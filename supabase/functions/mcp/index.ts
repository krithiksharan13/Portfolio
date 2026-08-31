// ---------------------------------------------------------------------------
// Read-only MCP server for Krithik Sharan's portfolio.
//
// Standalone Deno edge function implementing the MCP "Streamable HTTP" transport
// (JSON-RPC 2.0 over a single HTTP endpoint). No external dependencies, no
// Lovable SDK.
//
// Deploy:   supabase functions deploy mcp --no-verify-jwt
// Endpoint: https://<project-ref>.functions.supabase.co/mcp
// Test:     npx @modelcontextprotocol/inspector
// ---------------------------------------------------------------------------

import {
  academicProjects,
  certificateCategories,
  competitions,
  education,
  hackathonProjects,
  honours,
  minorExperiences,
  otherExperiences,
  portfolioProjects,
  profile,
  professionalExperiences,
  volunteering,
} from "./portfolio-data.ts";

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = { name: "krithik-sharan-portfolio", version: "1.0.0" };
const INSTRUCTIONS =
  "Read-only tools for Krithik Sharan S A's portfolio. Use get_profile for a " +
  "summary and contact links, list_experience for work history, list_projects " +
  "for portfolio/hackathon/academic/competition projects, list_certificates " +
  "for certifications, list_education for degrees, list_volunteering for " +
  "volunteering work, and list_honours for awards and recognition.";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, mcp-protocol-version, mcp-session-id",
};

// --- tool definitions -------------------------------------------------------

type Tool = {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  handler: (args: Record<string, unknown>) => unknown;
};

const jsonSchema = (
  properties: Record<string, unknown> = {},
  required: string[] = [],
) => ({ type: "object", properties, required, additionalProperties: false });

const tools: Tool[] = [
  {
    name: "get_profile",
    title: "Get profile",
    description:
      "Krithik Sharan S A's profile summary: headline, location, current roles and contact links.",
    inputSchema: jsonSchema(),
    handler: () => profile,
  },
  {
    name: "list_experience",
    title: "List work experience",
    description:
      "Krithik's experience entries (role, company, duration, description, achievements). Optionally filter by category: professional, other, minor, all.",
    inputSchema: jsonSchema({
      category: {
        type: "string",
        enum: ["professional", "other", "minor", "all"],
        description: "Which group to return. Defaults to all.",
      },
    }),
    handler: ({ category }) => {
      const groups: Record<string, unknown> = {
        professional: professionalExperiences,
        other: otherExperiences,
        minor: minorExperiences,
      };
      const keys =
        !category || category === "all"
          ? Object.keys(groups)
          : [String(category)];
      return keys.map((k) => ({ category: k, items: groups[k] ?? [] }));
    },
  },
  {
    name: "list_projects",
    title: "List projects",
    description:
      "Krithik's projects across portfolio, hackathon, academic and competition categories, with tools used and links.",
    inputSchema: jsonSchema({
      category: {
        type: "string",
        enum: ["portfolio", "hackathon", "academic", "competition", "all"],
        description: "Which group to return. Defaults to all.",
      },
      search: {
        type: "string",
        description: "Case-insensitive text filter on title / description / tools.",
      },
    }),
    handler: ({ category, search }) => {
      const q = typeof search === "string" ? search.trim().toLowerCase() : "";
      const match = (v: unknown) =>
        !q || JSON.stringify(v).toLowerCase().includes(q);
      const want = (c: string) =>
        !category || category === "all" || category === c;
      return {
        portfolio: want("portfolio") ? portfolioProjects.filter(match) : [],
        hackathon: want("hackathon") ? hackathonProjects.filter(match) : [],
        academic: want("academic") ? academicProjects.filter(match) : [],
        competition: want("competition") ? competitions.filter(match) : [],
      };
    },
  },
  {
    name: "list_certificates",
    title: "List certifications",
    description:
      "Krithik's certifications grouped by category, with issuer, date and verification link when available. Optionally filter by category or issuer.",
    inputSchema: jsonSchema({
      category: { type: "string", description: "Category name filter, e.g. 'Forage'." },
      issuer: { type: "string", description: "Issuer filter, e.g. 'Udemy'." },
    }),
    handler: ({ category, issuer }) => {
      const cat =
        typeof category === "string" ? category.trim().toLowerCase() : "";
      const iss = typeof issuer === "string" ? issuer.trim().toLowerCase() : "";
      return certificateCategories
        .filter((c) => !cat || c.name.toLowerCase().includes(cat))
        .map((c) => ({
          category: c.name,
          certificates: c.certificates.filter(
            (cert) => !iss || cert.issuer.toLowerCase().includes(iss),
          ),
        }))
        .filter((c) => c.certificates.length > 0);
    },
  },
  {
    name: "list_education",
    title: "List education",
    description:
      "Krithik's education history with degrees, institutions, grades and modules.",
    inputSchema: jsonSchema(),
    handler: () => education,
  },
  {
    name: "list_volunteering",
    title: "List volunteering",
    description:
      "Krithik's volunteering roles with organisation, duration and contributions.",
    inputSchema: jsonSchema(),
    handler: () => volunteering,
  },
  {
    name: "list_honours",
    title: "List honours",
    description:
      "Krithik's honours and recognition (student representation awards), with issuer and date.",
    inputSchema: jsonSchema(),
    handler: () => honours,
  },
];

const toolByName = new Map(tools.map((t) => [t.name, t]));

// --- JSON-RPC plumbing ----------------------------------------------------

type RpcRequest = {
  jsonrpc: "2.0";
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown>;
};

const rpcResult = (id: RpcRequest["id"], result: unknown) => ({
  jsonrpc: "2.0" as const,
  id: id ?? null,
  result,
});

const rpcError = (id: RpcRequest["id"], code: number, message: string) => ({
  jsonrpc: "2.0" as const,
  id: id ?? null,
  error: { code, message },
});

export function handleRpc(req: RpcRequest): unknown | null {
  switch (req.method) {
    case "initialize":
      return rpcResult(req.id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      });

    case "notifications/initialized":
    case "notifications/cancelled":
      return null; // notifications get no response

    case "ping":
      return rpcResult(req.id, {});

    case "tools/list":
      return rpcResult(req.id, {
        tools: tools.map((t) => ({
          name: t.name,
          title: t.title,
          description: t.description,
          inputSchema: t.inputSchema,
          annotations: { readOnlyHint: true, openWorldHint: false },
        })),
      });

    case "tools/call": {
      const name = String(req.params?.name ?? "");
      const tool = toolByName.get(name);
      if (!tool) return rpcError(req.id, -32602, `Unknown tool: ${name}`);
      try {
        const data = tool.handler(
          (req.params?.arguments as Record<string, unknown>) ?? {},
        );
        return rpcResult(req.id, {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
          structuredContent: { result: data },
        });
      } catch (err) {
        return rpcResult(req.id, {
          content: [{ type: "text", text: `Error: ${(err as Error).message}` }],
          isError: true,
        });
      }
    }

    default:
      return rpcError(req.id, -32601, `Method not found: ${req.method}`);
  }
}

// --- HTTP entrypoint ------------------------------------------------------

export async function handleRequest(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: CORS });
  }

  // GET is used by the spec for an optional server->client SSE stream. This
  // server is stateless and request/response only, so decline it.
  if (request.method === "GET") {
    return new Response("MCP server (POST JSON-RPC to this endpoint)", {
      status: 405,
      headers: { ...CORS, Allow: "POST, OPTIONS" },
    });
  }

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: CORS });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(rpcError(null, -32700, "Parse error"), {
      status: 400,
      headers: CORS,
    });
  }

  // A client may batch requests in an array.
  const requests = Array.isArray(body) ? body : [body];
  const responses = requests
    .map((r) => handleRpc(r as RpcRequest))
    .filter((r): r is NonNullable<typeof r> => r !== null);

  if (responses.length === 0) {
    return new Response(null, { status: 202, headers: CORS });
  }

  const payload = Array.isArray(body) ? responses : responses[0];
  return Response.json(payload, {
    headers: { ...CORS, "MCP-Protocol-Version": PROTOCOL_VERSION },
  });
}

// Deno (Supabase edge runtime) only - guarded so the module can be imported
// by Node-based tests.
// deno-lint-ignore no-explicit-any
const g = globalThis as any;
if (typeof g.Deno?.serve === "function") {
  g.Deno.serve(handleRequest);
}
