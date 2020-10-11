export const getArgs = (command: string): string[] =>
  process.argv.slice(process.argv.findIndex((v) => v === command) + 1);
