import { ApiItems } from "../api/getApiItems";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";

/**
 * Returns the markdown string for a variable
 */
export const getMarkdownForVariable = (
  items: ApiItems,
  variableName: string
): string => {
  let markdown = `## ${variableName}\n\n`;
  const variable = items.variables[variableName];

  markdown += getDescription(getDocComment(variable));

  return markdown;
};
