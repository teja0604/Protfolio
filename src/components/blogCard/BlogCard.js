import React from "react";
import "./BlogCard.scss";
import {Link} from "react-router-dom";

export default function BlogCard({blog, isDark}) {
  return (
    <div>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <Link
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          to={blog.route}
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
