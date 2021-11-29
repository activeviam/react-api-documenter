import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { ApiDocumentedItem, ApiItem } from "@microsoft/api-extractor-model";
import {
  DocComment,
  DocParagraph,
  DocPlainText,
  DocSection,
  StringBuilder,
  TSDocConfiguration,
} from "@microsoft/tsdoc";

/**
 * Returns the description of `item`, fitting just below its title.
 * Generates it from the TS Doc.
 */
export const getDescription = ({
  configuration,
  item,
  markdownEmitter,
}: {
  configuration: TSDocConfiguration;
  item: ApiItem;
  markdownEmitter: MarkdownEmitter;
}): string => {
  const stringBuilder = new StringBuilder();
  const docSection = new DocSection({ configuration });

  if (item instanceof ApiDocumentedItem) {
    const tsdocComment: DocComment | undefined = item.tsdocComment;

    if (tsdocComment) {
      if (tsdocComment.deprecatedBlock) {
        docSection.appendNodes([
          new DocParagraph({ configuration }, [
            new DocPlainText({
              configuration,
              text: ":::caution Deprecated",
            }),
          ]),
          ...tsdocComment.deprecatedBlock.content.nodes,
          new DocParagraph({ configuration }, [
            new DocPlainText({ configuration, text: ":::" }),
          ]),
        ]);
      }

      for (const node of tsdocComment.summarySection.nodes) {
        docSection.appendNode(node);
      }
    }
  }

  return markdownEmitter.emit(stringBuilder, docSection, {});
};
