import { ApiFunction } from "@microsoft/api-extractor-model";
import { ApiItems } from "../api/getApiItems";
import { getDescription } from "./getDescription";
import { getDocComment } from "./getDocComment";
import { getMarkdownForFunction } from "./getMarkdownForFunction";

/**
 * Returns the markdown string for a hook
 */
export const getMarkdownForHook = (
  item: ApiFunction,
  packageCanonicalReference: string
): string => {
  return getMarkdownForFunction(item, packageCanonicalReference);
};
