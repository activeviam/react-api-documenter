import { ApiItems } from "../api/getApiItems";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";

/**
 * Returns the markdown string for a Context Provider
 */
export const getMarkdownForContextProvider = (
  items: ApiItems,
  contextProviderName: string
): string => {
  let markdown = `## ${contextProviderName}\n\n`;
  const contextProvider = items.contextProviders[contextProviderName];

  markdown += getDescription(getDocComment(contextProvider));

  markdown += `

\`\`\`jsx
<${contextProviderName} value={${contextProviderName[0].toLowerCase()}${contextProviderName
    .slice(1)
    .replace(/Provider$/, "")}}>
  {children}
</${contextProviderName}>
\`\`\``;

  return markdown;
};
