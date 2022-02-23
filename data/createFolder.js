const fs = require("fs");
const folderName = process.argv[2] || "Project";

try {
	fs.mkdirSync(folderName);
	fs.writeFileSync(`${folderName}/index.html`, "");
	fs.writeFileSync(`${folderName}/style.css`, "");
	fs.writeFileSync(`${folderName}/script.js`, "");
} catch (error) {
	console.log("We have a problem!" + error);
}

// easiest way of upper code

// import { mkdirSync, writeFileSync } from "fs";
// const folderName = process.argv[2] || "Project";

// try {
// 	mkdirSync(folderName);
// 	writeFileSync(`${folderName}/index.html`);
// 	writeFileSync(`${folderName}/style.css`);
// 	writeFileSync(`${folderName}/script.js`);
// } catch (error) {
// 	console.log("We have a problem!" + error);
// }
