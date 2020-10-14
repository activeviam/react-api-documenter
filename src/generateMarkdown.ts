import * as path from "path";
import { ApiPackage } from "@microsoft/api-extractor-model";
import { readdir, writeFile } from "fs-extra";

import { ApiItems, getApiItems } from "./api/getApiItems";
import { getMarkdownPage } from "./output/getMarkdownPage";

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

  const apiPackage = ApiPackage.loadFromJsonFile(
    path.resolve(inputFolder, apiFileName)
  );

  const items = getApiItems(apiPackage, ignorePattern);

  await Promise.all(
    Object.keys(items).map((key: keyof ApiItems) => {
      if (key === "props") {
        // We don't generate a dedicated page for props: they are inlined with their corresponding Components.
        return Promise.resolve();
      }
      const markdownPage = getMarkdownPage(
        items,
        key,
        apiPackage.canonicalReference.toString()
      );
      return writeFile(path.resolve(outputFolder, `${key}.md`), markdownPage);
    })
  );
};
