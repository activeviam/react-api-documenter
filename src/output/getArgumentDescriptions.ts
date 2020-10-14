/**
 * Returns the descriptions of an ApiFunction's arguments.
 */
export const getArgumentDescriptions = (
  argumentNames: string[],
  docComment: string
): { [argumentName: string]: string } => {
  const argumentDescriptions: { [argumentName: string]: string } = {};

  argumentNames.forEach((name) => {
    const toMatch = `@param ${name} - `;
    const index = docComment.indexOf(toMatch);
    if (index !== -1) {
      argumentDescriptions[name] = docComment.slice(
        index + toMatch.length,
        docComment.indexOf("\n", index)
      );
    }
  });

  return argumentDescriptions;
};
