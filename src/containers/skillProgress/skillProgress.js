import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {useInView} from "react-intersection-observer";

export default function StackProgress() {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  if (techStack.viewSkillBars) {
    return (
      <div className="skills-container" ref={ref}>
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: inView ? exp.progressPercentage : "0%"
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    );
  }
  return null;
}
