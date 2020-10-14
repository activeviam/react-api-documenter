export const escapeSpecialCharacters = (value: string): string =>
  (value || "")
    .replace(/\|/gm, "&#124;")
    .replace(/</gm, "&lt;")
    .replace(/\n/gm, "<br />")
    .replace(/\t/gm, "&nbsp;&nbsp;");
