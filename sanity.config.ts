/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// ...other imports

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

import { myStructure } from "@/sanity/desk/myStructure";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({ structure: myStructure }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
