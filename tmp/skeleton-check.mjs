import fs from "fs";
function skeleton(file) {
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/\/\*[\s\S]*?\*\//g, "");      // block comments
  s = s.replace(/\/\/.*$/gm, "");               // line comments
  s = s.replace(/'(\\.|[^'\\])*'/g, "S");       // single-quoted strings
  s = s.replace(/"(\\.|[^"\\])*"/g, "S");       // double-quoted strings
  s = s.replace(/[ \t]+/g, " ");                // collapse spaces/tabs
  return s.trim();
}
const en = skeleton(process.argv[2]);
const pt = skeleton(process.argv[3]);
const enObj = en.slice(en.indexOf("HOME_EN") + "HOME_EN".length);
enObj; // no-op
const enStart = en.indexOf("HOME_EN");
const ptStart = pt.indexOf("HOME_PT");
const enObj2 = en.slice(enStart + "HOME_EN".length);
const ptObj2 = pt.slice(ptStart + "HOME_PT".length);
const enBody = enObj2.slice(enObj2.indexOf("{"));
const ptBody = ptObj2.slice(ptObj2.indexOf("{"));
if (enObj === ptObj) {
  console.log("MATCH: skeleton identical (structure, keys, array shape, counts all match).");
} else {
  console.log("MISMATCH. Diffing:");
  const enLines = enObj.split("\n");
  const ptLines = ptObj.split("\n");
  const max = Math.max(enLines.length, ptLines.length);
  let diffs = 0;
  for (let i = 0; i < max; i++) {
    if (enLines[i] !== ptLines[i]) {
      diffs++;
      if (diffs <= 40) console.log(`L${i + 1}:\n  EN: ${JSON.stringify(enLines[i])}\n  PT: ${JSON.stringify(ptLines[i])}`);
    }
  }
  console.log(`Total differing lines: ${diffs}`);
  console.log(`EN lines: ${enLines.length}, PT lines: ${ptLines.length}`);
}
