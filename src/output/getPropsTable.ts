import { MarkdownEmitter } from "@microsoft/api-documenter/lib/markdown/MarkdownEmitter";
import { ApiItem, ApiPropertySignature } from "@microsoft/api-extractor-model";
import { TSDocConfiguration } from "@microsoft/tsdoc";
import { escapeSpecialCharacters } from "./escapeSpecialCharacters";
import { getDescription } from "./getDescription";
import { indent } from "./indent";

/**
 * Returns the table of props corresponding to `item`
 */
export const getPropsTable = ({
  configuration,
  item,
  markdownEmitter,
  packageCanonicalReference,
}: {
  configuration: TSDocConfiguration;
  item: ApiItem;
  markdownEmitter: MarkdownEmitter;
  packageCanonicalReference: string;
}): string => {
  return `| Property    |      Type     |  Description |
| :---------- | :------------ | :----------- |
${
  item
    ? item.members
        .map((prop: ApiPropertySignature) => {
          const { name } = prop;
          const type = indent(
            `${prop.excerptTokens
              .slice(1)
              .map(({ text, canonicalReference }) => {
                if (!canonicalReference) {
                  return text;
                }
                // Otherwise and if the reference is internal, add a link.
                const reference = canonicalReference.toString();
                return reference.startsWith(packageCanonicalReference)
                  ? `[${text}](./types#${reference
                      .slice(
                        packageCanonicalReference.length,
                        reference.indexOf(":")
                      )
                      .toLowerCase()})`
                  : text;
              })
              .join("")
              .replace(/;$/, "")}`
          );
          const description =
            getDescription({
              configuration,
              item,
              markdownEmitter,
            }) || "";
          const isOptional = prop.excerptTokens[0].text.endsWith("?: ");

          return `| ${name}${isOptional ? "?" : ""} | ${escapeSpecialCharacters(
            type
          )} | ${escapeSpecialCharacters(description)} |`;
        })
        .join("\n")
    : "| ... | ... | ... |"
}`;
};
