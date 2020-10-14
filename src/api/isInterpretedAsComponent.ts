import { ApiFunction, ApiVariable } from "@microsoft/api-extractor-model";

/**
 * Returns whether `item` is interpreted as a Component.
 */
export const isInterpretedAsComponent = (item: ApiFunction | ApiVariable) =>
  item.excerptTokens.some(
    (token) =>
      token.text === "FC" ||
      token.text === "Component" ||
      token.text === "ComponentType"
  );
