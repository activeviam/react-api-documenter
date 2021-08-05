import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { TSDocConfiguration } from "@microsoft/tsdoc";
import { ApiItems } from "../api/getApiItems";

export interface MarkdownGetterArguments {
  configuration: TSDocConfiguration;
  items: ApiItems;
  markdownEmitter: MarkdownEmitter;
  packageCanonicalReference: string;
  name: string;
  linkBaseUrl?: string;
}
