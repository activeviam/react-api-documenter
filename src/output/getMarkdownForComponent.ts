import { ApiPropertySignature } from "@microsoft/api-extractor-model";
import { getDescription } from "./getDescription";
import { getPropsTable } from "./getPropsTable";
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
  const props = items.props[name];

  markdown += getDescription({
    configuration,
    item: component,
    markdownEmitter,
  });

  markdown += `\`\`\`jsx
<${name}
${
  props
    ? props.members
        .map((prop: ApiPropertySignature) => `\t${prop.name}={${prop.name}}`)
        .join("\n")
    : "\t{...}"
}
/>
\`\`\`

${getPropsTable({
  configuration,
  item: props,
  markdownEmitter,
  packageCanonicalReference,
})}`;

  return markdown;
};
