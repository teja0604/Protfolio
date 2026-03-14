import React, {useContext} from "react";
import "./Contact.scss";
import {illustration, contactInfo} from "../../portfolio";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  const labelColor = isDark ? "#a0a0a0" : "#666666";
  const titleColor = isDark ? "#ffffff" : "#111111";
  const textColor = isDark ? "#c9c9c9" : "#444444";

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-container">
        {/* LEFT SECTION */}
        <div className="contact-header">
          <p className="contact-label" style={{color: labelColor}}>
            CONTACT
          </p>

          <h1 className="heading contact-title" style={{color: titleColor}}>
            Let's Build <br />
            <span className="contact-gradient-text">Something</span> <br />
            <span className="contact-gradient-text">Impactful</span>
          </h1>

          <p className="contact-subtitle" style={{color: textColor}}>
            {contactInfo.description}
          </p>

          <div className="contact-links">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-link"
              style={{color: titleColor}}
            >
              <span className="contact-icon">✉️</span>
              {contactInfo.email}
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{color: titleColor}}
            >
              <span className="contact-icon">💼</span>
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="contact-right">
          {/* LOTTIE EMAIL ANIMATION — Displayed alone as a large visual */}
          {illustration.animated && (
            <div className="contact-lottie">
              <DisplayLottie animationData={email} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
