import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {useHistory} from "react-router-dom";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const history = useHistory();

  const onNavClick = (e, targetId) => {
    e.preventDefault();
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
  };

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={e => onNavClick(e, "skills")}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={e => onNavClick(e, "experience")}>
                Work Experiences
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={e => onNavClick(e, "opensource")}>
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a
                href="#achievements"
                onClick={e => onNavClick(e, "achievements")}
              >
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={e => onNavClick(e, "blogs")}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={e => onNavClick(e, "talks")}>
                Talks
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" onClick={e => onNavClick(e, "resume")}>
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={e => onNavClick(e, "contact")}>
              Contact Me
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
