import { ApiFunction, ApiVariable } from "@microsoft/api-extractor-model";
import { isUpperCase } from "./isUpperCase";

/**
 * Returns whether `item` is interpreted as a hook.
 */
export const isInterpretedAsHook = (item: ApiFunction | ApiVariable) =>
  item.name.startsWith("use") && isUpperCase(item.name[3]);
