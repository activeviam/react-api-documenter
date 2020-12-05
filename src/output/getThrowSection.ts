import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { DocEmphasisSpan } from "@microsoft/api-documenter/lib/nodes/DocEmphasisSpan";
import { ApiDocumentedItem, ApiItem } from "@microsoft/api-extractor-model";
import {
  DocBlock,
  DocComment,
  DocParagraph,
  DocPlainText,
  DocSection,
  StandardTags,
  StringBuilder,
  TSDocConfiguration,
} from "@microsoft/tsdoc";

export const getThrowsSection = (
  apiItem: ApiItem,
  {
    configuration,
    markdownEmitter,
  }: { configuration: TSDocConfiguration; markdownEmitter: MarkdownEmitter }
): string => {
  const docSection = new DocSection({ configuration });

  if (apiItem instanceof ApiDocumentedItem) {
    const tsdocComment: DocComment | undefined = apiItem.tsdocComment;

    if (tsdocComment) {
      // Write the @throws blocks
      const throwsBlocks: DocBlock[] = tsdocComment.customBlocks.filter(
        (x) =>
          x.blockTag.tagNameWithUpperCase ===
          StandardTags.throws.tagNameWithUpperCase
      );

      if (throwsBlocks.length > 0) {
        docSection.appendNode(
          new DocParagraph({ configuration }, [
            new DocEmphasisSpan({ configuration, bold: true }, [
              new DocPlainText({ configuration, text: "Throws:" }),
            ]),
          ])
        );

        for (const throwsBlock of throwsBlocks) {
          for (const node of throwsBlock.content.nodes) {
            docSection.appendNode(node);
          }
        }
      }
    }
  }
  return markdownEmitter
    .emit(new StringBuilder(), docSection, {
      configuration,
    })
    .trim();
};
