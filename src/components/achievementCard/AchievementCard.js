import React, {useRef, useState} from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = e => {
    if (!cardRef.current) return;
    const {left, top, width, height} = cardRef.current.getBoundingClientRect();

    // Calculate cursor position relative to the element's center from -1 to 1
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    // Set glare position using CSS variables
    const glareX = e.clientX - left;
    const glareY = e.clientY - top;
    cardRef.current.style.setProperty("--x", `${glareX}px`);
    cardRef.current.style.setProperty("--y", `${glareY}px`);

    // Scale position to a subtle maximum rotation angle (15deg)
    const rotateY = x * 30;
    const rotateX = y * -30;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-10px)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
    if (cardRef.current) {
      cardRef.current.style.setProperty("--x", "50%");
      cardRef.current.style.setProperty("--y", "50%");
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: transformStyle
          ? "none"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease"
      }}
      className={
        isDark
          ? "dark-mode certificate-card achievement-card"
          : "certificate-card achievement-card"
      }
      data-aos="fade-up"
    >
      <div className="glare"></div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <div className="organization-div">
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {cardInfo.subtitle}
          </p>
        </div>
        <p
          className={isDark ? "dark-mode card-description" : "card-description"}
        >
          {cardInfo.description}
        </p>
        <div className="certificate-button-div">
          <a
            href={cardInfo.image}
            target="_blank"
            rel="noopener noreferrer"
            className="view-cert-btn"
          >
            View Certificate
          </a>
        </div>
      </div>
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return (
              <span
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
