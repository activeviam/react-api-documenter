import * as path from "path";
import { ApiModel, ApiPackage } from "@microsoft/api-extractor-model";
import { readdir, writeFile, ensureDir } from "fs-extra";

import { ApiItems, getApiItems } from "./api/getApiItems";
import { getMarkdownPage } from "./output/getMarkdownPage";
import { initConfiguration } from "./initConfiguration";
import { MarkdownEmitterWithLinks } from "./MarkdownEmitterWithLinks";

const configuration = initConfiguration();

/**
 * Reads the .api.json file under `inputFolder` and creates the documentation markdown files under `outputFolder`.
 */
export const generateMarkdown = async (
  inputFolder: string,
  outputFolder: string,
  ignorePattern?: RegExp
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

  const apiModel = new ApiModel();
  apiModel.addMember(apiPackage);

  const items = getApiItems(apiPackage, ignorePattern);

  const markdownEmitter = new MarkdownEmitterWithLinks(apiModel, items);

  await ensureDir(outputFolder);

  await Promise.all(
    Object.keys(items).map((key: keyof ApiItems) => {
      const markdownPage = getMarkdownPage({
        configuration,
        items,
        key,
        markdownEmitter,
        packageCanonicalReference: apiPackage.canonicalReference.toString(),
      });
      return writeFile(path.resolve(outputFolder, `${key}.md`), markdownPage);
    })
  );
};
