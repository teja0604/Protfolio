import React from "react";
import "./Button.scss";
import {useHistory} from "react-router-dom";

export default function Button({text, className, href, newTab}) {
  const history = useHistory();

  const handleHashClick = e => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (window.location.hash !== "#/") {
        history.push("/");
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({behavior: "smooth"});
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({behavior: "smooth"});
        }
      }
    }
  };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        onClick={handleHashClick}
      >
        {text}
      </a>
    </div>
  );
}
