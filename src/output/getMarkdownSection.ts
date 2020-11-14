import { ApiItems } from "../api/getApiItems";
import { getMarkdownForClass } from "./getMarkdownForClass";
import { getMarkdownForComponent } from "./getMarkdownForComponent";
import { getMarkdownForContextProvider } from "./getMarkdownForContextProvider";
import { getMarkdownForError } from "./getMarkdownForError";
import { getMarkdownForFunction } from "./getMarkdownForFunction";
import { getMarkdownForType } from "./getMarkdownForType";
import { getMarkdownForVariable } from "./getMarkdownForVariable";
import { MarkdownGetterArguments } from "./output.types";

/**
 * Returns the markdown section corresponding to a specific API item (for instance, a specific function).
 */
export const getMardownSection = ({
  key,
  ...args
}: {
  key: keyof ApiItems;
} & MarkdownGetterArguments): string => {
  const { items, name } = args;
  switch (key) {
    case "classes":
      return getMarkdownForClass(args);
    case "components":
      return getMarkdownForComponent(args);
    case "contextProviders":
      return getMarkdownForContextProvider(args);
    case "errors":
      return getMarkdownForError(args);
    case "functions":
      return getMarkdownForFunction(items.functions[name], args);
    case "hooks":
      return getMarkdownForFunction(items.hooks[name], args);
    case "types":
      return getMarkdownForType(args);
    case "variables":
      return getMarkdownForVariable(args);
    default:
  }
};
