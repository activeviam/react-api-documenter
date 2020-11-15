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

export const getRemarksSection = (
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
      // Write the @remarks block
      if (tsdocComment.remarksBlock) {
        docSection.appendNode(
          new DocParagraph({ configuration }, [
            new DocEmphasisSpan({ configuration, bold: true }, [
              new DocPlainText({ configuration, text: "Remarks:" }),
            ]),
          ])
        );
        for (const node of tsdocComment.remarksBlock.content.nodes) {
          docSection.appendNode(node);
        }
      }

      // Write the @example blocks
      const exampleBlocks: DocBlock[] = tsdocComment.customBlocks.filter(
        (x) =>
          x.blockTag.tagNameWithUpperCase ===
          StandardTags.example.tagNameWithUpperCase
      );

      for (const exampleBlock of exampleBlocks) {
        docSection.appendNode(
          new DocParagraph({ configuration }, [
            new DocEmphasisSpan({ configuration, bold: true }, [
              new DocPlainText({ configuration, text: "For example:" }),
            ]),
          ])
        );

        for (const node of exampleBlock.content.nodes) {
          docSection.appendNode(node);
        }
      }
    }
  }

  const remarks = markdownEmitter
    .emit(new StringBuilder(), docSection, {
      configuration,
    })
    .trim()
    .replace(/\n\n\`\`\`/gm, "\n```");

  return remarks;
};
