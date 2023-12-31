export const decodeHTML = (s) => {
  s = s.replace(/&gt;/g, ">");
  s = s.replace(/&lt;/g, "<");
  s = s.replace(/&amp;/g, "&");
  return s;
};
