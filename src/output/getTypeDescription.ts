import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { ApiTypeAlias } from "@microsoft/api-extractor-model";
import { StringBuilder, TSDocConfiguration } from "@microsoft/tsdoc";
import { ApiItems } from "../api/getApiItems";
import { createParagraphForTypeExcerpt } from "./createParagraphForTypeExcerpt";
import { indent } from "./indent";

export function getTypeDescription({
  items,
  markdownEmitter,
  type,
  configuration,
}: {
  items: ApiItems;
  type: ApiTypeAlias;
  markdownEmitter: MarkdownEmitter;
  configuration: TSDocConfiguration;
}) {
  const excerpt = markdownEmitter
    .emit(
      new StringBuilder(),
      createParagraphForTypeExcerpt(type.typeExcerpt, {
        configuration,
        items,
      }),
      { configuration }
    )
    .trim();
  return excerpt.includes("\\|")
    ? `- ${excerpt
        .split("\\|")
        .map((bit) => indent(bit))
        .join("\n-")}`
    : indent(excerpt);
}
