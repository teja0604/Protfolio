import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {/* GitHub repo cards removed */}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={socialMediaLinks.github}
        newTab={true}
      />
    </div>
  );
}
