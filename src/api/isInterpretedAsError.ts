import { ApiClass } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` is interpreted as an Error.
 */
export const isInterpretedAsError = (item: ApiClass) =>
  item.name.endsWith("Error");
