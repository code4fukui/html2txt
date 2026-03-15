# html2txt

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Convert HTML to plaintext.

## Features
- Extracts text content from HTML, ignoring tags and scripts
- Handles HTML entities and line breaks correctly
- Tested with a variety of HTML inputs

## Usage

Import the `html2txt` function:

```js
import { html2txt } from "https://code4fukui.github.io/html2txt/html2txt.js";
```

Then, use it to convert HTML to plaintext:

```js
console.log(html2txt("<img src=png>abc<br>def"));
```

## License
MIT License