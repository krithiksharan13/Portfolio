import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listProjectsTool from "./tools/list-projects";
import listCertificatesTool from "./tools/list-certificates";
import listVolunteeringTool from "./tools/list-volunteering";
import listEducationTool from "./tools/list-education";

export default defineMcp({
  name: "krithik-sharan-portfolio",
  title: "Krithik Sharan Portfolio",
  version: "0.1.0",
  instructions:
    "Public read-only tools for Krithik Sharan S A's portfolio. Use `get_profile` for a summary and contact links, `list_experience` for work history, `list_projects` for portfolio and hackathon projects, `list_certificates` for certifications, `list_education` for degrees, and `list_volunteering` for volunteering work.",
  tools: [
    getProfileTool,
    listExperienceTool,
    listProjectsTool,
    listCertificatesTool,
    listVolunteeringTool,
    listEducationTool,
  ],
});
