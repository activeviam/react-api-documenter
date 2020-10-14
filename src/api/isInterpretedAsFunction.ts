import { ApiFunction, ApiVariable } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` is interpreted as a Function.
 */
export const isInterpretedAsFunction = (item: ApiFunction | ApiVariable) =>
  item.excerptTokens.some((token) => token.text.includes(") =>"));
