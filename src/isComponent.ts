/**
 * Returns whether `item` represents a Component.
 */
export const isComponent = (item) =>
  item.excerptTokens.some(
    (token) =>
      token.text === "FC" ||
      token.text === "Component" ||
      token.text === "ComponentType"
  );
