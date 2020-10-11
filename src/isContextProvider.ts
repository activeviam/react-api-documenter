/**
 * Returns whether `item` represents a Context Provider.
 */
export const isContextProvider = (item) => item.name.endsWith("Provider");
