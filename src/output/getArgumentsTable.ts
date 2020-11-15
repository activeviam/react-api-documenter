import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { DocTable } from "@microsoft/api-documenter/lib/nodes/DocTable";
import { DocTableRow } from "@microsoft/api-documenter/lib/nodes/DocTableRow";
import { DocEmphasisSpan } from "@microsoft/api-documenter/lib/nodes/DocEmphasisSpan";
import {
  ApiConstructor,
  ApiDocumentedItem,
  ApiFunction,
  ApiReturnTypeMixin,
} from "@microsoft/api-extractor-model";
import {
  DocParagraph,
  DocPlainText,
  DocSection,
  StringBuilder,
  TSDocConfiguration,
} from "@microsoft/tsdoc";
import { ApiItems } from "../api/getApiItems";
import { createParagraphForTypeExcerpt } from "./createParagraphForTypeExcerpt";
import { IndentedTableCell } from "./IndentedTableCell";

export const getArgumentsTable = (
  apiFunction: ApiFunction | ApiConstructor,
  {
    configuration,
    items,
    markdownEmitter,
  }: {
    configuration: TSDocConfiguration;
    items: ApiItems;
    markdownEmitter: MarkdownEmitter;
  }
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
        new IndentedTableCell(
          { configuration },
          [
            new DocParagraph({ configuration }, [
              new DocPlainText({ configuration, text: apiParameter.name }),
            ]),
          ],
          { isIndented: true, characterBreakingLine: "," }
        ),
        new IndentedTableCell(
          { configuration },
          [
            createParagraphForTypeExcerpt(apiParameter.parameterTypeExcerpt, {
              configuration,
              items,
            }),
          ],
          { isIndented: true, characterBreakingLine: ";" }
        ),
        new IndentedTableCell({ configuration }, parameterDescription.nodes),
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
        items,
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
