import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  React.useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  if (!achievementSection.display) {
    return null;
  }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div" data-aos="zoom-in">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achievementsCards.map((card, i) => {
            return (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  subtitle: card.subtitle,
                  description: card.description,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footer
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
