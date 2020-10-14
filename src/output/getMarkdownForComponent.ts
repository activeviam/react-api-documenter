import { ApiPropertySignature } from "@microsoft/api-extractor-model";
import { ApiItems } from "../api/getApiItems";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";
import { getPropsTable } from "./getPropsTable";

/**
 * Returns the markdown string for a Component
 */
export const getMarkdownForComponent = (
  items: ApiItems,
  componentName: string,
  packageCanonicalReference: string
): string => {
  let markdown = `## ${componentName}\n\n`;
  const component = items.components[componentName];
  const props = items.props[componentName];

  markdown += getDescription(getDocComment(component));

  markdown += `

\`\`\`jsx
<${componentName}
${
  props
    ? props.members
        .map((prop: ApiPropertySignature) => `\t${prop.name}={${prop.name}}`)
        .join("\n")
    : "\t{...}"
}
/>
\`\`\`

${getPropsTable(props, packageCanonicalReference)}
`;

  return markdown;
};
