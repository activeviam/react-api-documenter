/**
 * Returns the description of `item`, fitting just below its title.
 * Generates it from the TS Doc.
 */
export const getDescription = (docComment: string): string => {
  let description: string = docComment
    ? docComment
        // Remove comment characters
        .replace(/(\/\**|\n\s*\*\s*)/gm, "")
    : "Undocumented";

  let openingIndex: number = 0;
  while (
    (openingIndex = description.indexOf("{@link")) &&
    openingIndex !== -1
  ) {
    const closingIndex = description.indexOf("}", openingIndex);
    const name = description.slice(openingIndex + 7, closingIndex);
    description = `${description.slice(
      0,
      openingIndex
    )} [${name}](./types#${name.toLowerCase()}) ${description.slice(
      closingIndex + 1
    )}`;
  }

  return description;
};
