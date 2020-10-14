import { ExcerptToken } from "@microsoft/api-extractor-model";

export const getFullExcerpt = (
  excerptTokens: readonly ExcerptToken[],
  packageCanonicalReference: string
) => {
  return excerptTokens
    .map(({ canonicalReference, text }) => {
      const reference = canonicalReference && canonicalReference.toString();
      if (!reference || !reference.startsWith(packageCanonicalReference)) {
        return text;
      }
      return `[${text}](./types#${reference
        .slice(packageCanonicalReference.length, reference.indexOf(":"))
        .toLowerCase()})`;
    })
    .join("");
};
