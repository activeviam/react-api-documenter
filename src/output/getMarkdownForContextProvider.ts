import { getDescription } from "./getDescription";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown string for a Context Provider
 */
export const getMarkdownForContextProvider = ({
  configuration,
  items,
  markdownEmitter,
  name,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const contextProvider = items.contextProviders[name];

  markdown += getDescription({
    configuration,
    item: contextProvider,
    markdownEmitter,
  });

  markdown += `\`\`\`jsx
<${name} value={${name[0].toLowerCase()}${name
    .slice(1)
    .replace(/Provider$/, "")}}>
  {children}
</${name}>
\`\`\``;

  return markdown;
};
