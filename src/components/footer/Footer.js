import React, {useContext} from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("© Krishna Teja")}
      </p>
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Made by Krishna Teja
      </p>
    </div>
  );
}
