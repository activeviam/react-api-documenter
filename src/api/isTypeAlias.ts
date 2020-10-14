import { ApiItem, ApiTypeAlias } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a Type Alias, in the sense of @microsoft/api-extractor.
 */
export const isTypeAlias = (item: ApiItem): item is ApiTypeAlias =>
  item.kind === "TypeAlias";
