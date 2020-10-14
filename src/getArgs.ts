export const getArgs = (command: string): string[] => {
  return process.argv.slice(process.argv.findIndex((v) => v === command) + 1);
};
