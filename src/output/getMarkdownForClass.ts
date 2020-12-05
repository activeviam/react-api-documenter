import { isConstructor } from "../api/isConstructor";
import { isMethod } from "../api/isMethod";
import { getArgumentsTable } from "./getArgumentsTable";
import { getDescription } from "./getDescription";
import { _getFunctionExcerpt } from "./getMarkdownForFunction";
import { getRemarksSection } from "./getRemarkSections";
import { getThrowsSection } from "./getThrowSection";
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
        items,
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
        items,
        configuration,
      });

      const remarkSections = getRemarksSection(item, {
        configuration,
        markdownEmitter,
      });

      if (remarkSections) {
        markdown += "\n";
        markdown += remarkSections;
      }

      const throwsSections = getThrowsSection(item, {
        configuration,
        markdownEmitter,
      });

      if (throwsSections) {
        markdown += "\n";
        markdown += throwsSections;
      }

      markdown += "\n\n";
    }
  });

  return markdown;
};
