import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import emailjs from "emailjs-com";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_id", // Placeholder - User needs to update
      "template_id", // Placeholder - User needs to update
      e.target,
      "public_key" // Placeholder - User needs to update
    ).then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      () => {
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-label">CONTACT</p>
          <h1 className="heading contact-title">
            Let's Build <br />
            <span className="highlight">Something</span> <br />
            Impactful
          </h1>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            {contactInfo.description}
          </p>
          <div className="contact-links">
            <a href={`mailto:${contactInfo.email}`} className="contact-link">
              {contactInfo.email}
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form 
            className={`contact-form ${isDark ? "dark-mode-form" : "light-mode-form"}`} 
            onSubmit={sendEmail}
          >
            <div className="form-field">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-field">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-field">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              />
            </div>

            <button type="submit" className="send-btn">
              Send Message →
            </button>
          </form>

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
