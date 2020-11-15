import { ApiConstructor, ApiFunction } from "@microsoft/api-extractor-model";

import { getArgumentsTable } from "./getArgumentsTable";
import { getDescription } from "./getDescription";
import { getRemarksSection } from "./getRemarkSections";
import { indent } from "./indent";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns an excerpt showing how the function can be called
 */
export const _getFunctionExcerpt = (
  item: ApiFunction | ApiConstructor,
  name: string
): string => {
  return `\`\`\`typescript
${name}(${indent(
    item.parameters.map((parameter) => parameter.name).join(", "),
    { characterBreakingLine: ",", isEscaped: false }
  )})
\`\`\`

`;
};

/**
 * Returns the markdown string for a function
 */
export const getMarkdownForFunction = (
  item: ApiFunction,
  { configuration, items, markdownEmitter }: MarkdownGetterArguments
): string => {
  let markdown = `## ${item.name}\n\n`;

  markdown += getDescription({
    configuration,
    item,
    markdownEmitter,
  });

  markdown += _getFunctionExcerpt(item, item.name);

  markdown += getArgumentsTable(item, {
    configuration,
    items,
    markdownEmitter,
  });

  const remarkSections = getRemarksSection(item, {
    configuration,
    markdownEmitter,
  });

  if (remarkSections) {
    markdown += "\n";
    markdown += remarkSections;
  }

  return markdown;
};
