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
    
    // Scale position to a subtle maximum rotation angle matching cursor flow
    const rotateY = x * 15; // 15deg max left/right tilt
    const rotateX = y * -15; // 15deg max up/down tilt (negative to tilt toward mouse)

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    );
  };

  const handleMouseLeave = () => {
    // Reset to generic 3D space when not actively tracking
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: transformStyle ? "none" : "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease"
      }}
      className={isDark ? "dark-mode certificate-card" : "certificate-card"}
      data-aos="fade-up"
    >
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
          onClick={() => window.open(cardInfo.image, "_blank")}
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
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
    </div>
  );
}
