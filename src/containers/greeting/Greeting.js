import React, {useContext} from "react";
import {TypeAnimation} from "react-type-animation";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ParticleBackground from "../../components/ParticleBackground";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting" style={{position: "relative"}}>
      <ParticleBackground isDark={isDark} />
      <div className="greeting-main" style={{position: "relative", zIndex: 1}}>
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            {greeting.roles && (
              <div
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
                style={{marginTop: "0.5rem", marginBottom: "1rem"}}
              >
                <TypeAnimation
                  sequence={greeting.roles}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    fontSize: "1.2em",
                    display: "inline-block",
                    fontWeight: "bold"
                  }}
                />
              </div>
            )}
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="man sitting on table"
              src={require("../../assets/images/manOnTable.svg")}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
