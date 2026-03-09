import React, {useContext} from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Journey.scss";
import StyleContext from "../../contexts/StyleContext";
import {journeyInfo} from "../../portfolio";
import emoji from "react-easy-emoji";

export default function Journey() {
  const {isDark} = useContext(StyleContext);

  if (!journeyInfo.display) {
    return null;
  }

  // Fallback to a star icon if the logo fails or isn't supplied
  const TimelineIcon = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <span style={{ fontSize: '24px' }}>{emoji("⭐")}</span>
    </div>
  );

  return (
    <div className="main" id="journey">
      <div className="journey-header-div">
        <h1 className="skills-heading">Journey & Milestones</h1>
        <p className={isDark ? "dark-mode journey-subtitle" : "subTitle journey-subtitle"}>
          A timeline of my professional, academic, and leadership experiences.
        </p>
      </div>

      <div className="journey-body-div" data-aos="fade-right">
        <VerticalTimeline lineColor={isDark ? "#2c2c2c" : "#e0e0e0"}>
          {journeyInfo.experiences.map((exp, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={exp.duration}
                dateClassName={isDark ? "timeline-date-dark" : "timeline-date-light"}
                contentStyle={{ 
                  background: isDark ? "rgba(255, 255, 255, 0.05)" : "#f4f4f4", 
                  color: isDark ? "#fff" : "#000",
                  boxShadow: isDark ? "0px 10px 30px -15px rgba(255, 255, 255, 0.15)" : "0px 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0,0,0,0.05)",
                }}
                contentArrowStyle={{ borderRight: isDark ? "7px solid  rgba(255, 255, 255, 0.05)" : "7px solid  #f4f4f4" }}
                iconStyle={{ background: exp.color, color: "#fff" }}
                icon={<TimelineIcon />}
              >
                <h3 className="vertical-timeline-element-title" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>{exp.title}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '1.1rem', marginTop: '5px', opacity: 0.8 }}>
                  <a href={exp.company_url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {exp.company}
                  </a>
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px', opacity: 0.7 }}>
                  <span style={{ marginRight: '5px' }}>📍</span>
                  <span>{exp.location}</span>
                </div>
                <p style={{ fontWeight: 400, opacity: 0.9 }}>
                  {exp.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
