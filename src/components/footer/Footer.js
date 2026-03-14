import React, {useContext} from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <div className="footer-content">
        <h1 className="footer-name">Krishna Teja</h1>
        <p className="footer-role">
          Full Stack Developer • Building Scalable Digital Experiences
        </p>
        <div className="footer-contact">
          <a
            href="mailto:vanamakrishnateja0604@gmail.com"
            className="footer-email"
          >
            vanamakrishnateja0604@gmail.com
          </a>
        </div>
        <div className="footer-social">
          <SocialMedia />
        </div>
        <div className="footer-divider"></div>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2026 Krishna Teja • All rights reserved.")}
        </p>
      </div>
    </div>
  );
}
