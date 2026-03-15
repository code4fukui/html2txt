# html2txt

HTMLからテキストを抽出するJavaScriptライブラリです。HTMLタグやスクリプト、スタイルを除外し、プレーンなテキストを生成します。

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