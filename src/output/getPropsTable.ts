import { ApiItem, ApiPropertySignature } from "@microsoft/api-extractor-model";
import { escapeSpecialCharacters } from "./escapeSpecialCharacters";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";
import { indent } from "./indent";

/**
 * Returns the table of props corresponding to `item`
 */
export const getPropsTable = (
  item: ApiItem,
  packageCanonicalReference: string
): string => {
  return `
| Property    |      Type     |  Description |
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
          const description = getDescription(getDocComment(prop)) || "";
          const isOptional = prop.excerptTokens[0].text.endsWith("?: ");

          return `| ${name}${isOptional ? "?" : ""} | ${escapeSpecialCharacters(
            type
          )} | ${escapeSpecialCharacters(description)} |`;
        })
        .join("\n")
    : "| ... | ... | ... |"
}`;
};
