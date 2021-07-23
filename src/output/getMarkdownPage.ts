import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { TSDocConfiguration } from "@microsoft/tsdoc";
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
export const getMarkdownPage = ({
  configuration,
  items,
  key,
  packageCanonicalReference,
  markdownEmitter,
}: {
  configuration: TSDocConfiguration;
  items: ApiItems;
  key: keyof ApiItems;
  packageCanonicalReference: string;
  markdownEmitter: MarkdownEmitter;
}): string => {
  // This top comment is helpful for Docusaurus integration
  let markdown = `---
title: ${labels[key]}
sidebar_label: ${labels[key]}
---
  \n`;

  // Props are documented alongside their corresponding Components.
  Object.keys(items[key]).forEach((name) => {
    markdown += `${getMardownSection({
      configuration,
      items,
      key,
      markdownEmitter,
      name,
      packageCanonicalReference,
    })}\n\n`;
  });

  return markdown;
};
