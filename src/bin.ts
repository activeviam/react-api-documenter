import { command } from "yargs";

import { generateMarkdown } from "./generateMarkdown";
import { getArgs } from "./getArgs";
import { getArg } from "./getArg";

command(
  "markdown",
  "Generates a markdown API documentation based on an api-json created with @microsoft/api-extractor.",
  (v) => v,
  async (options) => {
    const args = getArgs(options._[0]);

    const inputFolder = getArg(args, "--input-folder");
    const outputFolder = getArg(args, "--output-folder");
    const ignoreString = getArg(args, "--ignore-pattern");
    const linkBaseUrl = getArg(args, "--link-base-url");
    const ignorePattern = ignoreString ? new RegExp(ignoreString) : undefined;

    await generateMarkdown(
      inputFolder,
      outputFolder,
      ignorePattern,
      linkBaseUrl
    );
  }
)
  .demandCommand(1, "")
  .parse();
