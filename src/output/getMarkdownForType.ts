import { ApiItems } from "../api/getApiItems";
import { isTypeAlias } from "../api/isTypeAlias";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";
import { getFullExcerpt } from "./getFullExcerpt";
import { getPropsTable } from "./getPropsTable";
import { removeComments } from "./removeComments";

/**
 * Returns the markdown string for a Type
 */
export const getMarkdownForType = (
  items: ApiItems,
  typeName: string,
  packageCanonicalReference: string
): string => {
  let markdown = `## ${typeName}\n\n`;
  const type = items.types[typeName];

  markdown += getDescription(getDocComment(type));

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
      markdown += `
${fullExcerpt
  .slice(unionTypeStartingSentence.length)
  .split(" | ")
  .map((text) => `- ${text.replace(/\n/gm, "")}`)
  .join("\n")}

      `;
    } else {
      // Type assigned as a different type (usually because it extends it or gives it a generic type)
      markdown += `
\`\`\`typescript
${type.excerptTokens.map(({ text }) => text).join("")}
\`\`\`
      `;
    }
  } else {
    // Actual atomic type
    markdown += `
    
  ${getPropsTable(type, packageCanonicalReference)}
    `;
  }

  return markdown;
};
