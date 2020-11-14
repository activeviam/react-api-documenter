import { isConstructor } from "../api/isConstructor";
import { isMethod } from "../api/isMethod";
import { getArgumentsTable } from "./getArgumentsTable";
import { getDescription } from "./getDescription";
import { _getFunctionExcerpt } from "./getMarkdownForFunction";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown string for a Class
 */
export const getMarkdownForClass = ({
  configuration,
  items,
  markdownEmitter,
  name,
  packageCanonicalReference,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const item = items.classes[name];

  markdown += getDescription({
    configuration,
    item,
    markdownEmitter,
  });

  item.members.forEach((member) => {
    if (isConstructor(member)) {
      markdown += `### Constructor\n\n`;
      markdown += getDescription({
        configuration,
        item: member,
        markdownEmitter,
      });
      markdown += _getFunctionExcerpt(member, `new ${name}`);
      markdown += "\n";
      markdown += getArgumentsTable(member, {
        configuration,
        markdownEmitter,
      });
      markdown += "\n\n";
    } else if (isMethod(member)) {
      markdown += `### ${member.name}\n\n`;
      markdown += getDescription({
        configuration,
        item: member,
        markdownEmitter,
      });
      markdown += _getFunctionExcerpt(
        member,
        `${name[0].toLowerCase()}${name.slice(1)}.${member.name}`
      );
      markdown += "\n";
      markdown += getArgumentsTable(member, {
        markdownEmitter,
        configuration,
      });
      markdown += "\n\n";
    }
  });

  return markdown;
};
