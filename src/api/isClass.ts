import { ApiClass, ApiItem } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a Class, in the sense of @microsoft/api-extractor.
 */
export const isClass = (item: ApiItem): item is ApiClass =>
  item.kind === "Class";
