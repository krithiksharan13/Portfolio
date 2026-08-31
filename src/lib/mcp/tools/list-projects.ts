import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projectsData";
import { hackathonProjects } from "@/data/hackathonProjectsData";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Krithik's portfolio projects and hackathon projects, including tools used and repository or live links.",
  inputSchema: {
    category: z
      .enum(["portfolio", "hackathon", "all"])
      .optional()
      .describe("Which project group to return. Defaults to all."),
    search: z.string().optional().describe("Case-insensitive text filter on title, description or tools."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, search }) => {
    const q = search?.trim().toLowerCase();
    const matches = (value: unknown) => !q || JSON.stringify(value).toLowerCase().includes(q);

    const portfolio = projects
      .filter(matches)
      .map(({ title, description, tools, githubUrl }) => ({ title, description, tools, githubUrl }));
    const hackathon = hackathonProjects.filter(matches);

    const result = {
      portfolio: !category || category === "all" || category === "portfolio" ? portfolio : [],
      hackathon: !category || category === "all" || category === "hackathon" ? hackathon : [],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
