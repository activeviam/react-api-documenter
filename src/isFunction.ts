/**
 * Returns whether `item` represents a Function.
 */
export const isFunction = (item) =>
  item.excerptTokens.some((token) => token.text.includes(") =>"));
