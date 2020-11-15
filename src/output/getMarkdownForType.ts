import { StringBuilder } from "@microsoft/tsdoc";
import { isTypeAlias } from "../api/isTypeAlias";
import { createParagraphForTypeExcerpt } from "./createParagraphForTypeExcerpt";
import { getDescription } from "./getDescription";
import { getInterfaceTable } from "./getInterfaceTable";
import { getRemarksSection } from "./getRemarkSections";
import { indent } from "./indent";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown string for a Type
 */
export const getMarkdownForType = ({
  configuration,
  items,
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
    const excerpt = markdownEmitter
      .emit(
        new StringBuilder(),
        createParagraphForTypeExcerpt(type.typeExcerpt, {
          configuration,
          items,
        }),
        { configuration }
      )
      .trim();
    markdown += excerpt.includes("\\|")
      ? `- ${excerpt
          .split("\\|")
          .map((bit) => indent(bit))
          .join("\n-")}`
      : indent(excerpt);
  } else {
    // Actual atomic type
    markdown += `${getInterfaceTable(type, {
      configuration,
      items,
      markdownEmitter,
    })}`;
  }

  const remarkSections = getRemarksSection(type, {
    configuration,
    markdownEmitter,
  });

  if (remarkSections) {
    markdown += "\n";
    markdown += remarkSections;
  }

  return markdown;
};
