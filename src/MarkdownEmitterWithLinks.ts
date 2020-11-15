import {
  CustomMarkdownEmitter,
  ICustomMarkdownEmitterOptions,
} from "@microsoft/api-documenter/lib/markdown/CustomMarkdownEmitter";
import { IMarkdownEmitterContext } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { DocTable } from "@microsoft/api-documenter/lib/nodes/DocTable";
import { DocTableCell } from "@microsoft/api-documenter/lib/nodes/DocTableCell";
import { ApiModel } from "@microsoft/api-extractor-model";
import { DocLinkTag, DocNode } from "@microsoft/tsdoc";
import { ApiItems } from "./api/getApiItems";
import { getLinkPath } from "./getLinkPath";
import { indent } from "./output/indent";
import { IndentedTableCell } from "./output/IndentedTableCell";

// CustomMarkdownEmitter resolves api-documenter links: one page per API item.
// MarkdownEmitterWithLinks resolves react-api-documenter links: one page for a group of items (e.g. functions or Components) then one anchor per item.
export class MarkdownEmitterWithLinks extends CustomMarkdownEmitter {
  private _apiItems: ApiItems;

  public constructor(apiModel: ApiModel, apiItems: ApiItems) {
    super(apiModel);

    this._apiItems = apiItems;
  }

  /** @override */
  protected writeNode(
    docNode: DocNode,
    context: IMarkdownEmitterContext,
    docNodeSiblings: boolean
  ): void {
    const { writer } = context;
    switch (docNode.kind) {
      case "Table":
        const docTable = docNode as DocTable;
        // GitHub's markdown renderer chokes on tables that don't have a blank line above them,
        // whereas VS Code's renderer is totally fine with it.
        writer.ensureSkippedLine();

        context.insideTable = true;

        // Markdown table rows can have inconsistent cell counts.  Size the table based on the longest row.
        let columnCount: number = 0;
        if (docTable.header) {
          columnCount = docTable.header.cells.length;
        }
        for (const row of docTable.rows) {
          if (row.cells.length > columnCount) {
            columnCount = row.cells.length;
          }
        }

        // write the table header (which is required by Markdown)
        writer.write("| ");
        for (let i: number = 0; i < columnCount; ++i) {
          writer.write(" ");
          if (docTable.header) {
            const cell: DocTableCell | undefined = docTable.header.cells[i];
            if (cell) {
              this.writeNode(cell.content, context, false);
            }
          }
          writer.write(" |");
        }
        writer.writeLine();

        // write the divider
        writer.write("| ");
        for (let i: number = 0; i < columnCount; ++i) {
          writer.write(" :--- |");
        }
        writer.writeLine();

        for (const row of docTable.rows) {
          writer.write("| ");
          for (const cell of row.cells) {
            const options = (cell as IndentedTableCell).options;
            const isIndented = options?.isIndented;
            const characterBreakingLine = options?.characterBreakingLine;

            writer.write(" ");
            let cellContent = ``;

            // Intercept cell content writes
            const originalWrite = writer.write;
            writer.write = (message: string) => {
              cellContent += message;
            };
            this.writeNode(cell.content, context, false);
            writer.write = originalWrite.bind(writer);

            const formattedCellContent = isIndented ? indent(cellContent, {characterBreakingLine}) : cellContent;
            writer.write(formattedCellContent);

            writer.write(" |");
          }
          writer.writeLine();
        }
        writer.writeLine();

        context.insideTable = false;

        break;
      default:
        super.writeNode(docNode, context, docNodeSiblings);
    }
  }

  /** @override */
  protected writeLinkTagWithCodeDestination(
    docLinkTag: DocLinkTag,
    context: IMarkdownEmitterContext<ICustomMarkdownEmitterOptions>
  ): void {
    const linkedItemName =
      docLinkTag.codeDestination.memberReferences[0].memberIdentifier
        .identifier;

    const linkPath = getLinkPath(linkedItemName, this._apiItems);

    if (!linkPath) {
      context.writer.write(linkedItemName);
    } else {
      context.writer.write(`[${linkedItemName}](${linkPath})`);
    }
  }
}
