import { getDescription } from "./getDescription";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown string for an error
 */
export const getMarkdownForError = ({
  configuration,
  items,
  markdownEmitter,
  name,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const error = items.errors[name];

  markdown += getDescription({
    configuration,
    item: error,
    markdownEmitter,
  });

  markdown += `\`\`\`typescript
try {
  
} catch(error: Error) {
  if(error instanceof ${name}) {
    // handle ${name}
  }
}
\`\`\``;

  return markdown;
};
