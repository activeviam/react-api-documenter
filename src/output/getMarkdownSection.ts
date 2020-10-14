import { ApiItems } from "../api/getApiItems";
import { getMarkdownForClass } from "./getMarkdownForClass";
import { getMarkdownForComponent } from "./getMarkdownForComponent";
import { getMarkdownForContextProvider } from "./getMarkdownForContextProvider";
import { getMarkdownForError } from "./getMarkdownForError";
import { getMarkdownForFunction } from "./getMarkdownForFunction";
import { getMarkdownForHook } from "./getMarkdownForHook";
import { getMarkdownForType } from "./getMarkdownForType";
import { getMarkdownForVariable } from "./getMarkdownForVariable";

/**
 * Returns the markdown section corresponding to a specific API item (for instance, a specific function).
 */
export const getMardownSection = (
  items: ApiItems,
  kind: keyof ApiItems,
  name: string,
  packageCanonicalReference: string
): string => {
  switch (kind) {
    case "classes":
      return getMarkdownForClass(items, name, packageCanonicalReference);
    case "components":
      return getMarkdownForComponent(items, name, packageCanonicalReference);
    case "contextProviders":
      return getMarkdownForContextProvider(items, name);
    case "errors":
      return getMarkdownForError(items, name);
    case "functions":
      return getMarkdownForFunction(
        items.functions[name],
        packageCanonicalReference
      );
    case "hooks":
      return getMarkdownForHook(items.hooks[name], packageCanonicalReference);
    case "types":
      return getMarkdownForType(items, name, packageCanonicalReference);
    case "variables":
      return getMarkdownForVariable(items, name);
    default:
  }
};
