import { ApiConstructor, ApiFunction } from "@microsoft/api-extractor-model";

import { getArgumentsTable } from "./getArgumentsTable";
import { getDescription } from "./getDescription";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns an excerpt showing how the function can be called
 */
export const _getFunctionExcerpt = (
  item: ApiFunction | ApiConstructor,
  name: string
): string => {
  return `\`\`\`typescript
${name}(${item.parameters
    .map((parameter) =>
      parameter.name
        .replace(/{ /gm, "{\n\t")
        .replace(/, }/gm, "\n}")
        .replace(/, /gm, ",\n\t")
    )
    .join(", ")})
\`\`\`
`;
};

/**
 * Returns the markdown string for a function
 */
export const getMarkdownForFunction = (
  item: ApiFunction,
  {
    configuration,
    markdownEmitter,
    packageCanonicalReference,
  }: MarkdownGetterArguments
): string => {
  let markdown = `## ${item.name}\n\n`;

  markdown += getDescription({
    configuration,
    item,
    markdownEmitter,
  });

  markdown += _getFunctionExcerpt(item, item.name);

  markdown += "\n";

  markdown += getArgumentsTable(item, { configuration, markdownEmitter });

  return markdown;
};
