import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

/*
nodeType
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
Node.ELEMENT_NODE (1)
Node.ATTRIBUTE_NODE (2)
Node.TEXT_NODE (3)
Node.CDATA_SECTION_NODE(4)
Node.PROCESSING_INSTRUCTION_NODE (7)
Node.COMMENT_NODE (8)
Node.DOCUMENT_NODE (9)
Node.DOCUMENT_TYPE_NODE (10)
Node.DOCUMENT_FRAGMENT_NODE (11)
*/

export const html2txt = (html) => {
  const dom = HTMLParser.parse(html);
  //console.log(dom);

  const res = [];
  const getText = (dom) => {
    if (dom.nodeType == 1) {
      if (dom.rawTagName == "script" || dom.rawTagName == "style") {
        return;
      }
      if (dom.rawTagName == "br") {
        res.push("\n");
      }
    }
    if (dom.nodeType == 3) {
      res.push(dom._rawText);
    }
    for (const c of dom.childNodes) {
      getText(c);
    }
    if (dom.nodeType == 1 && dom.rawTagName == "p") {
      res.push("\n");
    }
  };
  getText(dom);
  return res.join("").trim();
};
