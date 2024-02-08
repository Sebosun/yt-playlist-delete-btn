import fs from "fs";

const comments = `// ==UserScript==
// @name        Remove watch later duplicates
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/playlist?*
// @grant       none
// @version     1.0
// @author      -
// @description ${new Date().toLocaleString()}
// @require     https://greasyfork.org/scripts/419640-onelementready/code/onElementReady.js?version=887637
// ==/UserScript==
`;

try {
  const distFile = fs.readFileSync("dist/index.js", "utf-8");

  const newFile = comments + "\n" + distFile;
  fs.writeFileSync("dist/index.js", newFile);
  console.log("Added user-script values to dist file");
} catch (e) {
  console.log("No dist file found");
}
