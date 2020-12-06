import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";

import LoadingScreen from "./components/LoadingScreen";
import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/navbar/NavBar";
import AboutMe from "./components/AboutMe";
import Home from "./components/home/Home";
import FindMe from "./components/contact/FindMe";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: "desktop",
      width: 1500,
      FullPageMode: "full-page", // "full-page" will eable scroll effect, "normal" disables effect
    };
  }

  setFullPage = () => {
    let pageMode =
      this.state.FullPageMode === "full-page" ? "normal" : "full-page";
    this.setState({ FullPageMode: pageMode });
  };

  componentDidMount() {
    this.setState({
      device: mediaQuery(window.innerWidth),
      width: window.innerWidth,
    });
    window.addEventListener("resize", () => {
      this.setState({
        device: mediaQuery(window.innerWidth),
        width: window.innerWidth,
      });
    });

    //  hide loading screen after first run
    setTimeout(() => {
      sessionStorage.setItem("showLoadingScreen", "false");
    }, 2000);
  }

  styles = {
    margin: "0 0 0 0",
  };

  render() {
    return (
      <Router>
        <div style={this.styles} className="app">
          {sessionStorage.getItem("showLoadingScreen") === "false" ? (
            <></>
          ) : (
            <LoadingScreen />
          )}
          <NavBar device={this.state.device} />
          <VideoBackground />
          <Switch>
            <Route exact path="/">
              <FullPage duration={100} scrollMode={this.state.FullPageMode}>
                <Slide>
                  <Home />
                </Slide>
                <Slide>
                  <AboutMe />
                </Slide>
                <Slide>
                  <FindMe
                    windowWidth={this.state.width}
                    setFullPage={this.setFullPage}
                    device={this.state.device}
                  />
                </Slide>
              </FullPage>
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mediaQuery = (width) => {
  if (width > 768) {
    return "desktop";
  } else if (width >= 600 && width <= 770) {
    // expect bugs on super large tablet, solve this as to do
    return "tablet";
  } else {
    return "phone";
  }
};

export default App;
