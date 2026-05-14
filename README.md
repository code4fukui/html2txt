# html2txt

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight JavaScript module for converting HTML to plain text.

## Features

- **Strips HTML Tags:** Removes all tags, including `<script>` and `<style>` elements, to extract pure text content.
- **Smart Line Breaks:** Correctly interprets `<br>` tags and adds newlines after block elements like `<p>`.
- **Newline Collapsing:** Consolidates multiple consecutive newlines into a single one for clean, readable output.
- **HTML Entity Decoding:** Decodes common HTML entities (e.g., `&amp;`, `&lt;`, `&gt;`).
- **Trims Whitespace:** Automatically removes leading and trailing whitespace from the result.
- **ES Module:** Works in modern browsers, Deno, and Node.js.

## Usage

Import the `html2txt` function from its URL. It can be used directly in Deno, browsers, or with bundlers.

```js
import { html2txt } from "https://code4fukui.github.io/html2txt/html2txt.js";
```

### Examples

**Basic Conversion**

```js
const html = "<a href='#'>Link</a> text with a<br>line break.";
const text = html2txt(html);
console.log(text);
// Output:
// Link text with a
// line break.
```

**Ignoring Scripts and Handling Paragraphs**

```js
const html = `
  <p>This is the first paragraph.</p>
  <script>console.log("This will be ignored");</script>
  <p>This is the second.</p>
`;
const text = html2txt(html);
console.log(text);
// Output:
// This is the first paragraph.
// This is the second.
```

**Decoding Entities and Collapsing Newlines**

```js
const html = "Check this out: &gt; item 1<br><br><br>&lt; item 2";
const text = html2txt(html);
console.log(text);
// Output:
// Check this out: > item 1
// < item 2
```

## License

MIT License — see [LICENSE](LICENSE).