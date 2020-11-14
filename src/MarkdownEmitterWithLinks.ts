import {
  CustomMarkdownEmitter,
  ICustomMarkdownEmitterOptions,
} from "@microsoft/api-documenter/lib/markdown/CustomMarkdownEmitter";
import { IMarkdownEmitterContext } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { ApiModel } from "@microsoft/api-extractor-model";
import { DocLinkTag } from "@microsoft/tsdoc";
import { ApiItems } from "./api/getApiItems";

// CustomMarkdownEmitter resolves api-documenter links: one page per API item.
// MarkdownEmitterWithLinks resolves react-api-documenter links: one page for a group of items (e.g. functions or Components) then one anchor per item.
export class MarkdownEmitterWithLinks extends CustomMarkdownEmitter {
  private _apiItems: ApiItems;

  public constructor(apiModel: ApiModel, apiItems: ApiItems) {
    super(apiModel);

    this._apiItems = apiItems;
  }

  /** @override */
  protected writeLinkTagWithCodeDestination(
    docLinkTag: DocLinkTag,
    context: IMarkdownEmitterContext<ICustomMarkdownEmitterOptions>
  ): void {
    const linkedItemName =
      docLinkTag.codeDestination.memberReferences[0].memberIdentifier
        .identifier;
    const fileName = [
      "classes",
      "errors",
      "functions",
      "components",
      "contextProviders",
      "hooks",
      "types",
      "variables",
      "props",
    ].find((kind) => this._apiItems[kind][linkedItemName] !== undefined);

    if (!fileName) {
      context.writer.write(linkedItemName);
    } else {
      context.writer.write(
        `[${linkedItemName}](${fileName}#${linkedItemName.toLowerCase()})`
      );
    }
  }
}
