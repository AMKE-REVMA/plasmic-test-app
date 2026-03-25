import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "v5ohcrizy7bpv6djHhyfdg",  // ID of a project you are using
      token: "EsOmtdj7HYz1IhkFb5Y6aBm806T5vyIW8DGWEDypTM4TJlFvP1lntffAgSsNUcWdjDL5tQ3S3gyFqoTXg2g"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
