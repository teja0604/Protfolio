const fs = require("fs");
const path = require("path");

const responsiveCSS = `
@media (max-width: 1024px) {
  .blog-page-isolated {
    padding: 30px 15px;
  }
  .blog-title-header {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .blog-title-header {
    font-size: 2.1rem;
  }
  .blog-body-text {
    font-size: 1.05rem;
  }
  .blog-meta {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  .code-block {
    font-size: 0.95rem;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .blog-title-header {
    font-size: 1.8rem;
  }
  .blog-body-text h3 {
    font-size: 1.5rem;
  }
  .blog-page-isolated {
    padding: 20px 10px;
  }
  .back-btn {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  .code-block {
    font-size: 0.85rem;
    padding: 10px;
    border-radius: 4px;
    overflow-x: scroll;
  }
}
`;

const blogs = [
  "dijkstra-blog",
  "springboot-blog",
  "java-oop-blog",
  "codechef-journey-blog",
  "react-springboot-fullstack-blog"
];

blogs.forEach(blog => {
  const cssPath = path.join(__dirname, "src", "blogs", blog, "style.css");
  if (fs.existsSync(cssPath)) {
    let content = fs.readFileSync(cssPath, "utf8");
    // Remove old simple 768px media query block if it exists at the end
    content = content.replace(
      /@media \(max-width: 768px\) \{[\s\S]*\}\s*$/,
      ""
    );
    // Append the new comprehensive responsive grids
    content += responsiveCSS;
    fs.writeFileSync(cssPath, content, "utf8");
    console.log("Updated responsive CSS for", blog);
  }
});
