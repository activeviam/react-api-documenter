import { Excerpt } from "@microsoft/api-extractor-model";
import {
  DocLinkTag,
  DocNodeContainer,
  DocParagraph,
  DocPlainText,
  TSDocConfiguration,
} from "@microsoft/tsdoc";
import { getLinkPath } from "../getLinkPath";
import { ApiItems } from "../api/getApiItems";

const appendExcerptWithHyperlinks = (
  docNodeContainer: DocNodeContainer,
  excerpt: Excerpt,
  {
    configuration,
    items,
  }: { configuration: TSDocConfiguration; items: ApiItems }
): void => {
  for (const token of excerpt.spannedTokens) {
    const linkedItemName: string = token.text.replace(/[\r\n]+/g, " ");

    // If it's hyperlinkable, then append a DocLinkTag
    if (token.kind === "Reference" && token.canonicalReference) {
      docNodeContainer.appendNode(
        new DocLinkTag({
          configuration,
          tagName: "@link",
          linkText: linkedItemName,
          urlDestination: getLinkPath(linkedItemName, items),
        })
      );
    } else {
      // Otherwise append non-hyperlinked text
      docNodeContainer.appendNode(
        new DocPlainText({ configuration, text: linkedItemName })
      );
    }
  }
};

export const createParagraphForTypeExcerpt = (
  excerpt: Excerpt,
  {
    configuration,
    items,
  }: { configuration: TSDocConfiguration; items: ApiItems }
): DocParagraph => {
  const paragraph: DocParagraph = new DocParagraph({ configuration });

  if (!excerpt.text.trim()) {
    paragraph.appendNode(
      new DocPlainText({ configuration, text: "(not declared)" })
    );
  } else {
    appendExcerptWithHyperlinks(paragraph, excerpt, { configuration, items });
  }

  return paragraph;
};
