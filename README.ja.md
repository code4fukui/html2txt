# html2txt

HTMLをプレーンテキストに変換する軽量なJavaScriptモジュール。

## 機能

- **HTMLタグの除去:** `<script>`や`<style>`要素を含むすべてのタグを除去し、純粋なテキストコンテンツを抽出します。
- **スマートな改行処理:** `<br>`タグを正しく解釈し、`<p>`などのブロック要素の後に改行を追加します。
- **改行の圧縮:** 複数の連続した改行を1つにまとめ、クリーンで読みやすい出力にします。
- **HTMLエンティティのデコード:** 一般的なHTMLエンティティ（例: `&amp;`、`&lt;`、`&gt;`）をデコードします。
- **空白文字のトリム:** 結果の先頭と末尾の空白文字を自動的に削除します。
- **ESモジュール:** モダンブラウザ、Deno、Node.jsで動作します。

## 使い方

URLから `html2txt` 関数をインポートします。Deno、ブラウザ、またはバンドラで直接使用できます。

```js
import { html2txt } from "https://code4fukui.github.io/html2txt/html2txt.js";
```

### 例

**基本的な変換**

```js
const html = "<a href='#'>Link</a> text with a<br>line break.";
const text = html2txt(html);
console.log(text);
// 出力:
// Link text with a
// line break.
```

**スクリプトの無視と段落の処理**

```js
const html = `
  <p>This is the first paragraph.</p>
  <script>console.log("This will be ignored");</script>
  <p>This is the second.</p>
`;
const text = html2txt(html);
console.log(text);
// 出力:
// This is the first paragraph.
// This is the second.
```

**エンティティのデコードと改行の圧縮**

```js
const html = "Check this out: &gt; item 1<br><br><br>&lt; item 2";
const text = html2txt(html);
console.log(text);
// 出力:
// Check this out: > item 1
// < item 2
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
