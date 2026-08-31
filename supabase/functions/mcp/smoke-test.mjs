// Node smoke test for the MCP server logic. Run: npx tsx supabase/functions/mcp/smoke-test.mjs
import { handleRpc, handleRequest } from "./index.ts";

let failures = 0;
const check = (label, cond) => {
  console.log(`${cond ? "PASS" : "FAIL"}  ${label}`);
  if (!cond) failures++;
};

// initialize
const init = handleRpc({ jsonrpc: "2.0", id: 1, method: "initialize" });
check("initialize returns serverInfo", init?.result?.serverInfo?.name === "krithik-sharan-portfolio");
check("initialize advertises tools capability", !!init?.result?.capabilities?.tools);

// notifications get no response
check("notifications/initialized -> null", handleRpc({ jsonrpc: "2.0", method: "notifications/initialized" }) === null);

// tools/list
const list = handleRpc({ jsonrpc: "2.0", id: 2, method: "tools/list" });
const names = (list?.result?.tools ?? []).map((t) => t.name);
check("tools/list has 6 tools", names.length === 6);
check("tools/list includes get_profile", names.includes("get_profile"));
check("every tool has an object inputSchema", list.result.tools.every((t) => t.inputSchema?.type === "object"));

// tools/call get_profile
const prof = handleRpc({ jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "get_profile", arguments: {} } });
check("get_profile returns text content", prof?.result?.content?.[0]?.type === "text");
check("get_profile structuredContent has name", prof?.result?.structuredContent?.result?.name?.includes("Krithik"));

// list_projects with search filter
const proj = handleRpc({ jsonrpc: "2.0", id: 4, method: "tools/call", params: { name: "list_projects", arguments: { search: "power bi" } } });
const projData = proj.result.structuredContent.result;
check("list_projects search matches portfolio items", projData.portfolio.length > 0);
check("list_projects search excludes non-matches", projData.academic.length === 0);

// list_projects category filter
const acad = handleRpc({ jsonrpc: "2.0", id: 5, method: "tools/call", params: { name: "list_projects", arguments: { category: "academic" } } });
const acadData = acad.result.structuredContent.result;
check("category=academic returns academic only", acadData.academic.length === 4 && acadData.portfolio.length === 0);

// list_experience filter
const exp = handleRpc({ jsonrpc: "2.0", id: 6, method: "tools/call", params: { name: "list_experience", arguments: { category: "professional" } } });
check("list_experience professional filter", exp.result.structuredContent.result[0].category === "professional");

// list_certificates issuer filter
const certs = handleRpc({ jsonrpc: "2.0", id: 7, method: "tools/call", params: { name: "list_certificates", arguments: { issuer: "Forage" } } });
const certData = certs.result.structuredContent.result;
check("list_certificates issuer=Forage returns only Forage certs", certData.every((c) => c.certificates.every((x) => x.issuer === "Forage")));

// unknown tool
const bad = handleRpc({ jsonrpc: "2.0", id: 8, method: "tools/call", params: { name: "nope", arguments: {} } });
check("unknown tool -> error", bad?.error?.code === -32602);

// unknown method
const badm = handleRpc({ jsonrpc: "2.0", id: 9, method: "foo/bar" });
check("unknown method -> -32601", badm?.error?.code === -32601);

// HTTP layer: OPTIONS + POST
const opt = await handleRequest(new Request("http://x/mcp", { method: "OPTIONS" }));
check("OPTIONS -> CORS", opt.headers.get("access-control-allow-origin") === "*");

const post = await handleRequest(
  new Request("http://x/mcp", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list" }),
  }),
);
const postJson = await post.json();
check("POST tools/list -> 6 tools", postJson.result.tools.length === 6);

console.log(failures === 0 ? "\nALL PASS" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
