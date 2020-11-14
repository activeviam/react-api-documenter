import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { DocTable } from "@microsoft/api-documenter/lib/nodes/DocTable";
import { DocTableCell } from "@microsoft/api-documenter/lib/nodes/DocTableCell";
import { DocTableRow } from "@microsoft/api-documenter/lib/nodes/DocTableRow";
import { DocHeading } from "@microsoft/api-documenter/lib/nodes/DocHeading";
import { DocEmphasisSpan } from "@microsoft/api-documenter/lib/nodes/DocEmphasisSpan";
import {
  ApiConstructor,
  ApiDocumentedItem,
  ApiFunction,
  ApiReturnTypeMixin,
  Excerpt,
} from "@microsoft/api-extractor-model";
import {
  DocLinkTag,
  DocNodeContainer,
  DocParagraph,
  DocPlainText,
  DocSection,
  StringBuilder,
  TSDocConfiguration,
} from "@microsoft/tsdoc";

const appendExcerptWithHyperlinks = (
  docNodeContainer: DocNodeContainer,
  excerpt: Excerpt,
  { configuration }: { configuration: TSDocConfiguration }
): void => {
  for (const token of excerpt.spannedTokens) {
    const unwrappedTokenText: string = token.text.replace(/[\r\n]+/g, " ");

    // If it's hyperlinkable, then append a DocLinkTag
    if (token.kind === "Reference" && token.canonicalReference) {
      docNodeContainer.appendNode(
        new DocLinkTag({
          configuration,
          tagName: "@link",
          linkText: unwrappedTokenText,
          urlDestination: `types#${token.text.toLowerCase()}`,
        })
      );
    } else {
      // Otherwise append non-hyperlinked text
      docNodeContainer.appendNode(
        new DocPlainText({ configuration, text: unwrappedTokenText })
      );
    }
  }
};

const createParagraphForTypeExcerpt = (
  excerpt: Excerpt,
  { configuration }: { configuration: TSDocConfiguration }
): DocParagraph => {
  const paragraph: DocParagraph = new DocParagraph({ configuration });

  if (!excerpt.text.trim()) {
    paragraph.appendNode(
      new DocPlainText({ configuration, text: "(not declared)" })
    );
  } else {
    appendExcerptWithHyperlinks(paragraph, excerpt, { configuration });
  }

  return paragraph;
};

export const getArgumentsTable = (
  apiFunction: ApiFunction | ApiConstructor,
  {
    markdownEmitter,
    configuration,
  }: { markdownEmitter: MarkdownEmitter; configuration: TSDocConfiguration }
): string => {
  const docSection = new DocSection({ configuration });
  const parametersTable = new DocTable({
    configuration,
    headerTitles: ["Argument", "Type", "Description"],
  });

  for (const apiParameter of apiFunction.parameters) {
    const parameterDescription: DocSection = new DocSection({ configuration });
    if (apiParameter.tsdocParamBlock) {
      for (const node of apiParameter.tsdocParamBlock.content.nodes) {
        docSection.appendNode(node);
      }
    }

    parametersTable.addRow(
      new DocTableRow({ configuration }, [
        new DocTableCell({ configuration }, [
          new DocParagraph({ configuration }, [
            new DocPlainText({ configuration, text: apiParameter.name }),
          ]),
        ]),
        new DocTableCell({ configuration }, [
          createParagraphForTypeExcerpt(apiParameter.parameterTypeExcerpt, {
            configuration,
          }),
        ]),
        new DocTableCell({ configuration }, parameterDescription.nodes),
      ])
    );
  }

  if (parametersTable.rows.length > 0) {
    docSection.appendNode(parametersTable);
  }

  if (ApiReturnTypeMixin.isBaseClassOf(apiFunction)) {
    docSection.appendNode(
      new DocParagraph({ configuration }, [
        new DocEmphasisSpan({ configuration, bold: true }, [
          new DocPlainText({ configuration, text: "Returns:" }),
        ]),
      ])
    );

    docSection.appendNode(
      createParagraphForTypeExcerpt(apiFunction.returnTypeExcerpt, {
        configuration,
      })
    );

    if (apiFunction instanceof ApiDocumentedItem) {
      if (apiFunction.tsdocComment && apiFunction.tsdocComment.returnsBlock) {
        for (const node of apiFunction.tsdocComment.returnsBlock.content
          .nodes) {
          docSection.appendNode(node);
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
