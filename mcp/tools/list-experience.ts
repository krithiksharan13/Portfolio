import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { professionalExperiences } from "@/data/professionalExperience";
import { minorExperiences } from "@/data/minorExperience";
import { otherExperiences } from "@/data/otherExperience";

const groups = {
  professional: professionalExperiences,
  minor: minorExperiences,
  other: otherExperiences,
} as const;

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List Krithik's work experience entries (role, company, duration, description, achievements). Optionally filter by category.",
  inputSchema: {
    category: z
      .enum(["professional", "minor", "other", "all"])
      .optional()
      .describe("Which experience group to return. Defaults to all."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const selected = !category || category === "all" ? (["professional", "minor", "other"] as const) : ([category] as const);
    const result = selected.map((key) => ({ category: key, items: groups[key] }));
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { groups: result },
    };
  },
});
