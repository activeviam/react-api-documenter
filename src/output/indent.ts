/**
 * Returns the indented version of `input`, assuming it's a string representing a JSON object
 */
export const indent = (input: string): string => {
  let output = "";

  let indentationLevel = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "{") {
      indentationLevel++;
    } else if (
      char === "\n" &&
      input
        .slice(i + 1)
        .trim()
        .startsWith("}")
    ) {
      indentationLevel--;
    }
    output += char;
    if (char === `\n` && indentationLevel > 0) {
      output += `\t`.repeat(indentationLevel);
    }
  }

  return output;
};
