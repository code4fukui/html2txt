# html2txt

HTMLからプレーンテキストを抽出するJavaScriptライブラリです。HTMLタグ、スクリプト、スタイルを除外し、テキストコンテンツを抽出します。HTMLエンティティの変換にも対応しています。

## 機能

- HTMLからテキストを抽出
- スクリプトやスタイルタグの除外
- HTMLエンティティのデコード

## 使い方

```js
import { html2txt } from "https://code4fukui.github.io/html2txt/html2txt.js";

console.log(html2txt("<img src=png>abc<br>def"));
```

## ライセンス

MIT License