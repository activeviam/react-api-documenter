import { ApiItems } from "../api/getApiItems";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";

/**
 * Returns the markdown string for an error
 */
export const getMarkdownForError = (
  items: ApiItems,
  errorName: string
): string => {
  let markdown = `## ${errorName}\n\n`;
  const error = items.errors[errorName];

  markdown += getDescription(getDocComment(error));

  markdown += `

\`\`\`typescript
try {
  
} catch(error: Error) {
  if(error instanceof ${errorName}) {
    // handle ${errorName}
  }
}
\`\`\``;

  return markdown;
};
