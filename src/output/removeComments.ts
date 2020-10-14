export const removeComments = (input: string): string =>
  input.replace(/\/\*([\s\S]*?)\*\//gm, "");
