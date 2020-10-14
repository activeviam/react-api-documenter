import { ApiConstructor, ApiFunction } from "@microsoft/api-extractor-model";
import { escapeSpecialCharacters } from "./escapeSpecialCharacters";
import { getArgumentDescriptions } from "./getArgumentDescriptions";
import { getArgumentNames } from "./getArgumentNames";
import { getArgumentTypes } from "./getArgumentTypes";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";
import { indent } from "./indent";

/**
 * Returns a description based on the TSDoc of the function
 */
export const _getFunctionDescription = (
  item: ApiFunction | ApiConstructor
): string => {
  const docComment = getDocComment(item);
  const firstIndexOfParam = docComment.indexOf("* @param");
  const docCommentWithoutParams =
    firstIndexOfParam === -1
      ? docComment
      : docComment.slice(0, firstIndexOfParam);

  return getDescription(docCommentWithoutParams);
};

/**
 * Returns an excerpt showing how the function can be called
 */
export const _getFunctionExcerpt = (
  item: ApiFunction | ApiConstructor,
  name: string
): string => {
  return `
\`\`\`typescript
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
 * Returns a markdown table detailing the arguments of the function, their types and descriptions.
 */
export const _getArgumentsTable = (
  item: ApiFunction | ApiConstructor,
  packageCanonicalReference: string
) => {
  const docComment = getDocComment(item);
  const argumentNames = getArgumentNames(item);
  const argumentTypes = getArgumentTypes(
    item.excerptTokens,
    argumentNames,
    packageCanonicalReference
  );
  const argumentDescriptions = getArgumentDescriptions(
    argumentNames,
    docComment
  );

  return `
| Property    |      Type     |  Description |
| :---------- | :------------ | :----------- |
${argumentNames
  .map((name) => {
    // Otherwise and if the reference is internal, add a link.
    const typeName = argumentTypes[name]?.typeName;
    const isOptional = argumentTypes[name]?.isOptional;

    const description = argumentDescriptions[name] || "";
    return `| ${name}${isOptional ? "?" : ""} | ${escapeSpecialCharacters(
      indent(typeName || "")
    )} | ${escapeSpecialCharacters(description)} |`;
  })
  .join("\n")}
`;
};

/**
 * Returns the markdown string for a function
 */
export const getMarkdownForFunction = (
  item: ApiFunction,
  packageCanonicalReference: string
): string => {
  let markdown = `## ${item.name}\n\n`;

  markdown += _getFunctionDescription(item);

  markdown += _getFunctionExcerpt(item, item.name);

  markdown += _getArgumentsTable(item, packageCanonicalReference);

  return markdown;
};
