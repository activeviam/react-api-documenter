import { isUpperCase } from "./isUpperCase";

/**
 * Returns whether `item` represents a hook.
 */
export const isHook = (item) =>
  item.name.startsWith("use") && isUpperCase(item.name[3]);
