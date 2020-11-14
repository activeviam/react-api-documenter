import { ApiItems } from "../api/getApiItems";
import { isTypeAlias } from "../api/isTypeAlias";
import { getDescription } from "./getDescription";
import { getFullExcerpt } from "./getFullExcerpt";
import { getPropsTable } from "./getPropsTable";
import { MarkdownGetterArguments } from "./output.types";
import { removeComments } from "./removeComments";

/**
 * Returns the markdown string for a Type
 */
export const getMarkdownForType = ({
  configuration,
  items,
  packageCanonicalReference,
  markdownEmitter,
  name,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const type = items.types[name];

  markdown += getDescription({
    configuration,
    item: type,
    markdownEmitter,
  });

  if (isTypeAlias(type)) {
    const fullExcerpt = removeComments(
      getFullExcerpt(type.excerptTokens, packageCanonicalReference)
    ).replace(/;$/, "");
    const unionTypeStartingSentence = `export declare type ${type.name} = `;
    if (
      fullExcerpt.startsWith(unionTypeStartingSentence) &&
      !fullExcerpt.includes("{") &&
      !fullExcerpt.includes("<")
    ) {
      // Union type: create a bullet list
      markdown += `${fullExcerpt
        .slice(unionTypeStartingSentence.length)
        .split(" | ")
        .map((text) => `- ${text.replace(/\n/gm, "")}`)
        .join("\n")}`;
    } else {
      // Type assigned as a different type (usually because it extends it or gives it a generic type)
      markdown += `\`\`\`typescript
${type.excerptTokens.map(({ text }) => text).join("")}
\`\`\``;
    }
  } else {
    // Actual atomic type
    markdown += `${getPropsTable({
      configuration,
      item: type,
      markdownEmitter,
      packageCanonicalReference,
    })}`;
  }

  return markdown;
};
