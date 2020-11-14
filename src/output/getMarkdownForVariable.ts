import { getDescription } from "./getDescription";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown string for a variable
 */
export const getMarkdownForVariable = ({
  configuration,
  items,
  markdownEmitter,
  name,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const variable = items.variables[name];

  markdown += getDescription({
    configuration,
    item: variable,
    markdownEmitter,
  });

  return markdown;
};
