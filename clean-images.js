const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const imagesDir = path.join(srcDir, "assets", "images");

// Get all files in src (recursively)
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allSrcFiles = getAllFiles(srcDir).filter(
  f =>
    f.endsWith(".js") ||
    f.endsWith(".css") ||
    f.endsWith(".json") ||
    f.endsWith(".scss")
);
const allImages = fs
  .readdirSync(imagesDir)
  .filter(img => fs.statSync(path.join(imagesDir, img)).isFile());

let unreferencedImages = [];

for (const img of allImages) {
  let isReferenced = false;
  // some files are required via require("../../assets/images/image.png")
  // some by portfolio.js

  for (const srcFile of allSrcFiles) {
    const content = fs.readFileSync(srcFile, "utf8");
    if (content.includes(img)) {
      isReferenced = true;
      break;
    }
  }

  if (!isReferenced) {
    unreferencedImages.push(img);
  }
}

console.log("Found " + unreferencedImages.length + " unreferenced images:");
unreferencedImages.forEach(img => {
  fs.unlinkSync(path.join(imagesDir, img));
  console.log("Deleted: " + img);
});
