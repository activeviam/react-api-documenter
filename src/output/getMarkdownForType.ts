import { isTypeAlias } from "../api/isTypeAlias";
import { getDescription } from "./getDescription";
import { getInterfaceTable } from "./getInterfaceTable";
import { getRemarksSection } from "./getRemarkSections";
import { getTypeDescription } from "./getTypeDescription";
import { isPropsTypeWithMatchingComponent } from "./isPropsTypeWithMatchingComponent";
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
  if (isPropsTypeWithMatchingComponent(name, items)) {
    // Do not document this type in the `types` page if it is a props type with a component associated to it.
    // These are already documented next to their component.
    return;
  }
  let markdown = `## ${name}\n\n`;
  const type = items.types[name];

  markdown += getDescription({
    configuration,
    item: type,
    markdownEmitter,
  });

  if (isTypeAlias(type)) {
    markdown += getTypeDescription({
      configuration,
      items,
      type,
      markdownEmitter,
    });
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
