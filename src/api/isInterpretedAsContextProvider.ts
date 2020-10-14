import { ApiFunction, ApiVariable } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` is interpreted as a Context Provider.
 */
export const isInterpretedAsContextProvider = (
  item: ApiFunction | ApiVariable
) => item.name.endsWith("Provider");
