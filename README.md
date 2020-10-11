# React API Documenter

Like [@microsoft/api-documenter](https://www.npmjs.com/package/@microsoft/api-documenter), but taylored for [React](https://reactjs.org/) libraries.

Generates markdown files usable with [Docusaurus](https://v2.docusaurus.io/), from an `api.json` file created by [@microsoft/api-extractor](https://api-extractor.com/).

`@microsoft/api-documenter` is great, but in the context of React libraries, its output can be improved:

* It groups exports under categories, that would make more sense if they were more specific (e.g. _Functions_ => _Hooks_, _Components_, _Functions_)
* It creates one page per export, but the documentation would be more usable if Components and their props were grouped in a single page.

