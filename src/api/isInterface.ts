import { ApiInterface, ApiItem } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a Interface, in the sense of @microsoft/api-extractor.
 */
export const isInterface = (item: ApiItem): item is ApiInterface =>
  item.kind === "Interface";
