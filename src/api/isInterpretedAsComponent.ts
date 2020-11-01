import { ApiFunction, ApiVariable } from "@microsoft/api-extractor-model";
import { isFunction } from "./isFunction";

/**
 * Returns whether `item` is interpreted as a Component.
 */
export const isInterpretedAsComponent = (item: ApiFunction | ApiVariable) =>
  // Variable explicitely typed as a Component
  item.excerptTokens.some(
    (token) =>
      token.text === "FC" ||
      token.text === "Component" ||
      token.text === "ComponentType"
  ) ||
  // Function returning a JSX.Element
  (item.excerptTokens.length > 0 &&
    item.excerptTokens[item.excerptTokens.length - 1].text === "JSX.Element");
