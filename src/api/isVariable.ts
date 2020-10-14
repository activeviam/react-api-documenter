import { ApiVariable, ApiItem } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` represents a Variable, in the sense of @microsoft/api-extractor.
 */
export const isVariable = (item: ApiItem): item is ApiVariable =>
  item.kind === "Variable";
