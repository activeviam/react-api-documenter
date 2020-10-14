import { ApiConstructor, ApiItem } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a constructor, in the sense of @microsoft/api-extractor.
 */
export const isConstructor = (item: ApiItem): item is ApiConstructor =>
  item.kind === "Constructor";
