import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { DocEmphasisSpan } from "@microsoft/api-documenter/lib/nodes/DocEmphasisSpan";
import { DocTable } from "@microsoft/api-documenter/lib/nodes/DocTable";
import { DocTableRow } from "@microsoft/api-documenter/lib/nodes/DocTableRow";
import {
  ApiDocumentedItem,
  ApiInterface,
  ApiItem,
  ApiPropertyItem,
  ApiReleaseTagMixin,
  ReleaseTag,
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
import { getInterfaceMembers } from "./getInterfaceMembers";
import { IndentedTableCell } from "./IndentedTableCell";

const createTitleCell = (
  apiItem: ApiItem,
  { configuration }: { configuration: TSDocConfiguration }
): IndentedTableCell => {
  return new IndentedTableCell(
    { configuration },
    [
      new DocParagraph({ configuration }, [
        new DocPlainText({ configuration, text: apiItem.displayName }),
      ]),
    ],
    { isIndented: true, characterBreakingLine: "," }
  );
};

const createPropertyTypeCell = (
  apiItem: ApiItem,
  {
    configuration,
    items,
  }: { configuration: TSDocConfiguration; items: ApiItems }
): IndentedTableCell => {
  const section: DocSection = new DocSection({ configuration });

  if (apiItem instanceof ApiPropertyItem) {
    section.appendNode(
      createParagraphForTypeExcerpt(apiItem.propertyTypeExcerpt, {
        configuration,
        items,
      })
    );
  }

  return new IndentedTableCell({ configuration }, section.nodes, {
    isIndented: true,
    characterBreakingLine: ";",
  });
};

const createDescriptionCell = (
  apiItem: ApiItem,
  { configuration }: { configuration: TSDocConfiguration }
): IndentedTableCell => {
  const section: DocSection = new DocSection({ configuration });

  if (ApiReleaseTagMixin.isBaseClassOf(apiItem)) {
    if (apiItem.releaseTag === ReleaseTag.Beta) {
      section.appendNodesInParagraph([
        new DocEmphasisSpan({ configuration, bold: true, italic: true }, [
          new DocPlainText({ configuration, text: "(BETA)" }),
        ]),
        new DocPlainText({ configuration, text: " " }),
      ]);
    }
  }

  if (apiItem instanceof ApiDocumentedItem) {
    if (apiItem.tsdocComment !== undefined) {
      let firstNode: boolean = true;
      for (const node of apiItem.tsdocComment.summarySection.nodes) {
        if (firstNode) {
          if (node.kind === "Paragraph") {
            section.appendNodesInParagraph(node.getChildNodes());
            firstNode = false;
            continue;
          }
        }
        firstNode = false;

        section.appendNode(node);
      }
    }
  }

  return new IndentedTableCell({ configuration }, section.nodes);
};

export const getInterfaceTable = (
  item: ApiInterface,
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

  const eventsTable = new DocTable({
    configuration,
    headerTitles: ["Property", "Type", "Description"],
  });

  const propertiesTable = new DocTable({
    configuration,
    headerTitles: ["Property", "Type", "Description"],
  });

  const methodsTable = new DocTable({
    configuration,
    headerTitles: ["Method", "Description"],
  });

  const members =  getInterfaceMembers(item, items);

  for (const apiMember of members) {
    switch (apiMember.kind) {
      case "ConstructSignature":
      case "MethodSignature": {
        methodsTable.addRow(
          new DocTableRow({ configuration }, [
            createTitleCell(apiMember, { configuration }),
            createDescriptionCell(apiMember, { configuration }),
          ])
        );
        break;
      }
      case "PropertySignature": {
        if ((apiMember as ApiPropertyItem).isEventProperty) {
          eventsTable.addRow(
            new DocTableRow({ configuration }, [
              createTitleCell(apiMember, { configuration }),
              createPropertyTypeCell(apiMember, { configuration, items }),
              createDescriptionCell(apiMember, { configuration }),
            ])
          );
        } else {
          propertiesTable.addRow(
            new DocTableRow({ configuration }, [
              createTitleCell(apiMember, { configuration }),
              createPropertyTypeCell(apiMember, { configuration, items }),
              createDescriptionCell(apiMember, { configuration }),
            ])
          );
        }
        break;
      }
    }
  }

  if (eventsTable.rows.length > 0) {
    docSection.appendNode(eventsTable);
  }

  if (propertiesTable.rows.length > 0) {
    docSection.appendNode(propertiesTable);
  }

  if (methodsTable.rows.length > 0) {
    docSection.appendNode(methodsTable);
  }

  return markdownEmitter
    .emit(new StringBuilder(), docSection, {
      configuration,
    })
    .trim();
};
