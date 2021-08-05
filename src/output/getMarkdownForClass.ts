import { groupBy, minBy } from "lodash";

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
  linkBaseUrl,
}: MarkdownGetterArguments): string => {
  let markdown = `## ${name}\n\n`;
  const item = items.classes[name];

  markdown += getDescription({
    configuration,
    item,
    markdownEmitter,
  });

  const constructor = item.members.find(isConstructor);
  if (constructor !== undefined) {
    markdown += `### Constructor\n\n`;
    markdown += getDescription({
      configuration,
      item: constructor,
      markdownEmitter,
    });
    markdown += _getFunctionExcerpt(constructor, `new ${name}`);
    markdown += "\n";
    markdown += getArgumentsTable(constructor, {
      configuration,
      items,
      markdownEmitter,
      linkBaseUrl,
    });
    markdown += "\n\n";
  }

  const methods = item.members.filter(isMethod);
  const methodsGroupedByName = Object.values(groupBy(methods, "name"));

  // In case of function overloads, only the implemented method is documented.
  // See https://www.typescriptlang.org/docs/handbook/functions.html#overloads
  const documentedMethods = methodsGroupedByName.map((homonymMethods) =>
    minBy(homonymMethods, "overloadIndex")
  );

  documentedMethods.forEach((method) => {
    markdown += `### ${method.name}\n\n`;
    markdown += getDescription({
      configuration,
      item: method,
      markdownEmitter,
    });
    markdown += _getFunctionExcerpt(
      method,
      `${name[0].toLowerCase()}${name.slice(1)}.${method.name}`
    );
    markdown += "\n";
    markdown += getArgumentsTable(method, {
      markdownEmitter,
      items,
      configuration,
      linkBaseUrl,
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
  });

  return markdown;
};
