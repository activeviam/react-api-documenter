import * as path from "path";
import { readFile, readdir, writeJSON } from "fs-extra";
import { getApiItems } from "./getApiItems";
import { access } from "fs";

/**
 * Reads the .api.json file under `inputFolder` and creates the documentation markdown files under `outputFolder`.
 */
export const generateMarkdown = async (
  inputFolder: string,
  outputFolder: string,
  ignorePattern: RegExp
) => {
  const fileNames = await readdir(inputFolder);
  const apiFileName = fileNames.find((fileName) =>
    fileName.endsWith(".api.json")
  );

  if (apiFileName === undefined) {
    throw new Error(
      `Did not find an .api.json file in ${inputFolder}. Did you forget to run @microsoft/api-extractor? Did you get --input-folder wrong?`
    );
  }

  const apiBuffer = await readFile(path.resolve(inputFolder, apiFileName));
  const apiString = apiBuffer.toString();
  const api = JSON.parse(apiString);

  const items = getApiItems(api, ignorePattern);

  const itemNames = Object.keys(items).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        key === "props"
          ? Object.keys(items[key])
          : items[key].map(({ name }) => name),
    }),
    {}
  );

  await writeJSON(path.resolve(outputFolder, apiFileName), itemNames);
};
