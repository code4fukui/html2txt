import * as t from "https://deno.land/std/testing/asserts.ts";
import { html2txt } from "./html2txt.js";

Deno.test("simple", () => {
  t.assertEquals(html2txt("<a href=index.html>abc</a>def"), "abcdef");
});
Deno.test("skip script", () => {
  t.assertEquals(html2txt("<script>abc</script>def"), "def");
  t.assertEquals(html2txt(`A<script type="module">abc</script>def`), "Adef");
});
Deno.test("img", () => {
  t.assertEquals(html2txt("<img src=abc.png>abc<br>def"), "abc\ndef");
});
Deno.test("p", () => {
  t.assertEquals(html2txt("<p>abc</p><p>def</p>"), "abc\ndef");
});
