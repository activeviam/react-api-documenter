import { ApiItem, ApiMethod } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a method, in the sense of @microsoft/api-extractor.
 */
export const isMethod = (item: ApiItem): item is ApiMethod =>
  item.kind === "Method";
