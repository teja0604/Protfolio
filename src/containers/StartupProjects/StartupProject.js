import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p
          className={
            isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
                onClick={() =>
                  openUrlInNewTab(project.liveLink || project.githubLink)
                }
                style={{cursor: "pointer"}}
              >
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.liveLink || project.githubLink ? (
                    <div className="project-card-footer">
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                          onClick={e => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      ) : null}
                      {project.githubLink ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                          onClick={e => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </div>
  );
}
