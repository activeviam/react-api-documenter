import { ApiFunction, ApiItem } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a function, in the sense of @microsoft/api-extractor.
 */
export const isFunction = (item: ApiItem): item is ApiFunction =>
  item.kind === "Function";
