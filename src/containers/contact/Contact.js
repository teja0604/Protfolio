import React, { useContext } from "react";
import "./Contact.scss";
import { illustration, contactInfo } from "../../portfolio";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import emailjs from "emailjs-com";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", e.target, "public_key")
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  /* ---------- THEME STYLES ---------- */

  const formCardStyle = {
    background: isDark
      ? "rgba(24,26,31,0.65)"
      : "rgba(255,255,255,0.65)",
    backdropFilter: "blur(20px)",
    boxShadow: isDark
      ? "0 10px 40px rgba(0,0,0,0.5)"
      : "0 10px 40px rgba(0,0,0,0.1)",
    border: isDark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(0,0,0,0.12)",
  };

  const fieldStyle = {
    display: "block",
    padding: "16px 20px",
    borderRadius: "12px",
    fontSize: "16px",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
    color: isDark ? "#ffffff" : "#111111",
    border: isDark
      ? "1px solid rgba(255,255,255,0.2)"
      : "1px solid rgba(0,0,0,0.1)",
  };

  const labelColor = isDark ? "#a0a0a0" : "#666666";
  const titleColor = isDark ? "#ffffff" : "#111111";
  const textColor = isDark ? "#c9c9c9" : "#444444";

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-container">

        {/* LEFT SECTION */}

        <div className="contact-header">
          <p className="contact-label" style={{ color: labelColor }}>
            CONTACT
          </p>

          <h1 className="heading contact-title" style={{ color: titleColor }}>
            Let's Build <br />
            <span className="contact-gradient-text">Something</span> <br />
            <span className="contact-gradient-text">Impactful</span>
          </h1>

          <p className="contact-subtitle" style={{ color: textColor }}>
            {contactInfo.description}
          </p>

          <div className="contact-links">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-link"
              style={{ color: titleColor }}
            >
              <span className="contact-icon">✉️</span>
              {contactInfo.email}
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ color: titleColor }}
            >
              <span className="contact-icon">💼</span>
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            style={formCardStyle}
            onSubmit={sendEmail}
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              style={fieldStyle}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              style={fieldStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              style={{
                ...fieldStyle,
                height: "160px",
                resize: "vertical"
              }}
            />

            <button type="submit" className="send-btn">
              Send Message →
            </button>

          </form>

          {/* CONTACT IMAGE */}

          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Mail"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>

        </div>

      </div>
    </div>
  );
}