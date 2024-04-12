/**
 * Returns the indented version of `input`, assuming it's a string representing a JSON object
 */
export const indent = (
  input: string,
  options?: { characterBreakingLine?: string; isEscaped?: boolean }
): string => {
  const indexOfFirstOpeningBracket = input.indexOf("{");
  const indexOfLastOpeningBracked = input.lastIndexOf("}");

  if (indexOfFirstOpeningBracket === -1) {
    return input;
  }

  const begining = input.slice(0, indexOfFirstOpeningBracket);
  const middle = input.slice(
    indexOfFirstOpeningBracket,
    indexOfLastOpeningBracked + 1
  );
  const end = input.slice(indexOfLastOpeningBracked + 1);

  const characterBreakingLine = options?.characterBreakingLine || ";";
  const isEscaped = options?.isEscaped ?? true;

  const middleWithLineReturns = middle
    .replace(/\{/g, "{\n")
    .replace(/\}/g, "\n}")
    .replace(
      new RegExp(`(?<!&(l|g)t)\\${characterBreakingLine}(?! +\n)`, "gm"),
      `${characterBreakingLine}\n`
    );

  let indentedMiddle = "";

  let indentationLevel = 0;
  for (let i = 0; i < middleWithLineReturns.length; i++) {
    const char = middleWithLineReturns[i];
    if (char === "{") {
      indentationLevel++;
    } else if (
      char === "\n" &&
      middleWithLineReturns
        .slice(i + 1)
        .trim()
        .startsWith("}")
    ) {
      indentationLevel--;
    }
    indentedMiddle += char;
    if (char === `\n` && indentationLevel > 0) {
      indentedMiddle += `${isEscaped ? "&nbsp;&nbsp;" : "  "}`.repeat(
        indentationLevel
      );
    }
  }

  return `${begining}${
    isEscaped ? indentedMiddle.replace(/\n/gm, "<br />") : indentedMiddle
  }${end}`;
};
