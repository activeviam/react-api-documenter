import { ApiItems } from "../api/getApiItems";
import { getMardownSection } from "./getMarkdownSection";

const labels = {
  classes: "Classes",
  errors: "Errors",
  functions: "Functions",
  components: "Components",
  contextProviders: "Context providers",
  hooks: "Hooks",
  types: "Types",
  variables: "Variables",
  props: "Props",
};

/**
 * Returns the markdown section corresponding to an API page (for instance, functions in general).
 */
export const getMarkdownPage = (
  items: ApiItems,
  kind: keyof ApiItems,
  packageCanonicalReference: string
): string => {
  // This top comment is helpful for Docusaurus integration
  let markdown = `---
title: ${labels[kind]}
sidebar_label: ${labels[kind]}
---
  \n`;

  // Props are documented alongside their corresponding Components.
  if (kind !== "props") {
    Object.keys(items[kind]).forEach((name) => {
      markdown += `${getMardownSection(
        items,
        kind,
        name,
        packageCanonicalReference
      )}\n\n`;
    });
  }

  return markdown;
};
