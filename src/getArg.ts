export const getArg = (args: string[], key: string) => {
  const index = args.findIndex((arg) => arg === key);
  const value = args[index + 1];

  if (index === -1 || value === undefined) {
    throw new Error(`An argument should be given for ${key}`);
  }

  return value;
};
