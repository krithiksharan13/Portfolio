import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { certificateCategoriesInfo } from "@/data/certificatesList";

export default defineTool({
  name: "list_certificates",
  title: "List certifications",
  description:
    "List Krithik's certifications grouped by category (Data Analytics, AI, Forage, Academic, Non-Academic), with issuer, date and verification link when available.",
  inputSchema: {
    category: z.string().optional().describe("Optional category name filter, e.g. 'Forage'."),
    issuer: z.string().optional().describe("Optional issuer filter, e.g. 'Udemy'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, issuer }) => {
    const cat = category?.trim().toLowerCase();
    const iss = issuer?.trim().toLowerCase();
    const result = certificateCategoriesInfo
      .filter((c) => !cat || c.name.toLowerCase().includes(cat))
      .map((c) => ({
        category: c.name,
        certificates: c.certificates.filter((cert) => !iss || cert.issuer.toLowerCase().includes(iss)),
      }))
      .filter((c) => c.certificates.length > 0);

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { categories: result },
    };
  },
});
