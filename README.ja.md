# html2txt

HTML文書からテキストを抽出するJavaScriptライブラリです。`<script>`や`<style>`などのタグは除外され、プレーンなテキストが生成されます。

## デモ

デモは[こちら](https://code4fukui.github.io/html2txt/)で確認できます。

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