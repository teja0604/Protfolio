const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir("./src", function (filePath) {
  if (filePath.endsWith(".js")) {
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    // Remove imports
    content = content.replace(
      /import\s+\{[^}]*\}\s+from\s+['"]react-reveal['"];?\n?/g,
      ""
    );

    // Remove opening tags <Fade ...> or <Slide ...>
    content = content.replace(/<(Fade|Slide)[^>]*>/g, "");

    // Remove closing tags </Fade> or </Slide>
    content = content.replace(/<\/(Fade|Slide)>/g, "");

    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log("Cleaned:", filePath);
    }
  }
});
