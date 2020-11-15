import {
  DocTableCell,
  IDocTableCellParameters,
} from "@microsoft/api-documenter/lib/nodes/DocTableCell";
import { DocNode } from "@microsoft/tsdoc";

interface IndentationOptions {
  isIndented: boolean;
  characterBreakingLine: string;
}

export class IndentedTableCell extends DocTableCell {
  public readonly options?: IndentationOptions;

  constructor(
    parameters: IDocTableCellParameters,
    sectionChildNodes?: ReadonlyArray<DocNode>,
    options?: IndentationOptions
  ) {
    super(parameters, sectionChildNodes);

    this.options = options;
  }

  /** @override */
  public get kind(): string {
    return "IndentedTableCell";
  }
}
