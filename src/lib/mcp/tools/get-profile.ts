import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Krithik Sharan S A's profile summary: headline, current focus, contact links and portfolio site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Krithik Sharan S A",
      headline: "A Data Analyst who transforms numbers into narratives.",
      location: "Leeds, England",
      currentRoles: [
        "AI Automation Engineer at INOOKEY (Birmingham, UK)",
        "PGT Faculty Officer at The University of Leeds",
        "MSc Data Science and Analytics student, University of Leeds",
      ],
      links: {
        website: "https://krithik-sharan-portfolio-website.lovable.app",
        email: "krithiksharan13@gmail.com",
        linkedin: "https://www.linkedin.com/in/krithiksharan",
        github: "https://github.com/krithiksharan13",
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
