import fs from "fs";
import path from "path";

// Function to generate a nested folder structure as a string
function getFolderStructureString(dir, indent = "") {
  let structure = "";
  const files = fs.readdirSync(dir);

  for (const file of files) {
    // Skip the "node_modules" folder
    if (file === "node_modules" || file === ".git") continue;

    const fullPath = path.join(dir, file);
    const isDirectory = fs.statSync(fullPath).isDirectory();

    structure += `${indent}${isDirectory ? "📁" : "📄"} ${file}\n`;

    if (isDirectory) {
      structure += getFolderStructureString(fullPath, indent + "  ");
    }
  }
  return structure;
}
// Define your root directory and output file path
const rootDir = ".";
const outputFilePath = "./folder-structure.txt";

// Generate the folder structure and write it to a .txt file
const folderStructure = getFolderStructureString(rootDir);
fs.writeFileSync(outputFilePath, folderStructure, "utf-8");

console.log(`Folder structure saved to ${outputFilePath}`);
