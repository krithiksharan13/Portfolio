import { defineTool } from "@lovable.dev/mcp-js";
import { volunteeringData } from "@/data/volunteeringData";

export default defineTool({
  name: "list_volunteering",
  title: "List volunteering",
  description: "List Krithik's volunteering roles with organisation, duration and contributions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(volunteeringData, null, 2) }],
    structuredContent: { volunteering: volunteeringData },
  }),
});
