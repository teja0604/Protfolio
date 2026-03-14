import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Journey from "./journey/Journey";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import "./Main.scss";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <StartupProject />
          <Journey />
          <Achievement />
          <Blogs />
          <Profile />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;
