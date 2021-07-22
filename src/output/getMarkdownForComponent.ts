import { ApiPropertySignature } from "@microsoft/api-extractor-model";
import { isTypeAlias } from "../api/isTypeAlias";
import { getDescription } from "./getDescription";
import { getInterfaceMembers } from "./getInterfaceMembers";
import { getInterfaceTable } from "./getInterfaceTable";
import { getTypeDescription } from "./getTypeDescription";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown string for a Component
 */
export const getMarkdownForComponent = ({
  configuration,
  items,
  markdownEmitter,
  name,
  packageCanonicalReference,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const component = items.components[name];
  const propsName = `${name}Props`;
  const props = items.types[propsName];

  markdown += getDescription({
    configuration,
    item: component,
    markdownEmitter,
  });

  markdown += `\`\`\`jsx
<${name}
${
  props && !isTypeAlias(props)
    ? getInterfaceMembers(props, items)
        .map((prop: ApiPropertySignature) => `\t${prop.name}={${prop.name}}`)
        .join("\n")
    : "\t{...}"
}
/>
\`\`\`

${
  props
    ? `### ${propsName}\n\n${
        isTypeAlias(props)
          ? getTypeDescription({
              markdownEmitter,
              configuration,
              type: props,
              items,
            })
          : getInterfaceTable(props, {
              configuration,
              items,
              markdownEmitter,
            })
      }`
    : ""
}`;

  return markdown;
};
