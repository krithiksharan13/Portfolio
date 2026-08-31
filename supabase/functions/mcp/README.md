# Portfolio MCP server

A read-only [Model Context Protocol](https://modelcontextprotocol.io) server that
exposes the portfolio content as tools for AI agents. Standalone Deno edge
function - no external dependencies, no Lovable SDK.

## Tools

| Tool | Purpose |
| --- | --- |
| `get_profile` | Headline, location, current roles, contact links |
| `list_experience` | Work history (`category`: professional / other / minor / all) |
| `list_projects` | Projects (`category`: portfolio / hackathon / academic / competition / all, `search`) |
| `list_certificates` | Certifications (`category`, `issuer` filters) |
| `list_education` | Degrees, institutions, modules |
| `list_volunteering` | Volunteering roles |

## Files

- `index.ts` - MCP Streamable-HTTP transport (JSON-RPC 2.0 over one POST endpoint)
- `portfolio-data.ts` - plain-data mirror of `src/data/*` (keep in sync manually)
- `smoke-test.mjs` - `npx tsx supabase/functions/mcp/smoke-test.mjs`

## Deploy (when ready)

```bash
npm i -g supabase
supabase login
supabase link --project-ref lcyqmfahsmvebmsrpljl
supabase functions deploy mcp --no-verify-jwt
```

Endpoint: `https://lcyqmfahsmvebmsrpljl.functions.supabase.co/mcp`

Test with the MCP Inspector:

```bash
npx @modelcontextprotocol/inspector
# transport: Streamable HTTP, URL: the endpoint above
```

## Not deployed yet

This is committed but not live. Deploy when you want agents (Claude, etc.) to be
able to query the portfolio.
