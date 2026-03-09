import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import SpringBootBlog from "./blogs/springboot-blog";
import DijkstraBlog from "./blogs/dijkstra-blog";
import JavaOopBlog from "./blogs/java-oop-blog";
import CodeChefBlog from "./blogs/codechef-journey-blog";
import ReactSpringFullstackBlog from "./blogs/react-springboot-fullstack-blog";
import {HashRouter, Route, Switch} from "react-router-dom";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";
import Chatbot from "./components/chatbot/Chatbot";
import { useEffect } from "react";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode-body");
    } else {
      document.body.classList.remove("dark-mode-body");
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/blog/springboot" component={SpringBootBlog} />
            <Route path="/blog/dijkstra" component={DijkstraBlog} />
            <Route path="/blog/java-oop" component={JavaOopBlog} />
            <Route path="/blog/codechef-journey" component={CodeChefBlog} />
            <Route
              path="/blog/react-springboot-fullstack"
              component={ReactSpringFullstackBlog}
            />
          </Switch>
        </HashRouter>
        <Chatbot />
      </StyleProvider>
    </div>
  );
}

export default App;
