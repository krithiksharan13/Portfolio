# MCP server (authoring source)

These files describe a read-only [Model Context Protocol](https://modelcontextprotocol.io)
server that exposes the portfolio content as AI-agent tools (`get_profile`,
`list_experience`, `list_projects`, `list_certificates`, `list_education`,
`list_volunteering`).

**Status:** not deployed. Kept for reference. Phase 5 will rewrite this as a
standalone Supabase edge function (no `@lovable.dev/mcp-js` dependency) at
`supabase/functions/mcp/`.

The currently-committed `supabase/functions/mcp/index.ts` is the old
Lovable-bundled output and is not wired to anything.
