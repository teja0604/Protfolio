import React, {useEffect, useContext} from "react";
import {useParams, Link} from "react-router-dom";
import {blogData} from "../../blogContent";
import "./BlogPost.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Top from "../topbutton/Top";
import StyleContext from "../../contexts/StyleContext";

export default function BlogPost() {
  const {id} = useParams();
  const blog = blogData[id];
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <Header />
        <div
          className="blog-post-container"
          style={{textAlign: "center", padding: "100px 20px"}}
        >
          <h1 className={isDark ? "dark-mode text-color" : "text-color"}>
            Blog Not Found
          </h1>
          <Link to="/" className="back-link">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <Header />
      <div className="blog-post-container">
        <Link
          to="/"
          className={isDark ? "back-link dark-mode-link" : "back-link"}
        >
          &larr; Back to Portfolio
        </Link>
        <div
          className={
            isDark ? "blog-post-content dark-mode-content" : "blog-post-content"
          }
        >
          <h1 className="blog-post-title">{blog.title}</h1>
          <p className="blog-post-date">{blog.date}</p>
          <div className="blog-post-body">{blog.content}</div>
        </div>
      </div>
      <Footer />
      <Top />
    </div>
  );
}
