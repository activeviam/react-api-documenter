import { ApiItems } from "../api/getApiItems";
import { isConstructor } from "../api/isConstructor";
import { isMethod } from "../api/isMethod";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";
import {
  _getArgumentsTable,
  _getFunctionDescription,
  _getFunctionExcerpt,
} from "./getMarkdownForFunction";

/**
 * Returns the markdown string for a Class
 */
export const getMarkdownForClass = (
  items: ApiItems,
  className: string,
  packageCanonicalReference: string
): string => {
  let markdown = `## ${className}\n\n`;
  const item = items.classes[className];

  markdown += getDescription(getDocComment(item));
  markdown += "\n\n";

  item.members.forEach((member) => {
    if (isConstructor(member)) {
      markdown += `### Constructor\n\n`;
      markdown += _getFunctionDescription(member);
      markdown += _getFunctionExcerpt(member, `new ${className}`);
      markdown += _getArgumentsTable(member, packageCanonicalReference);
      markdown += "\n\n";
    } else if (isMethod(member)) {
      markdown += `### ${member.name}\n\n`;
      markdown += _getFunctionDescription(member);
      markdown += _getFunctionExcerpt(
        member,
        `${className[0].toLowerCase()}${className.slice(1)}.${member.name}`
      );
      markdown += _getArgumentsTable(member, packageCanonicalReference);
      markdown += "\n\n";
    }
  });

  return markdown;
};
