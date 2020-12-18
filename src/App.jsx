import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { FullPage, Slide } from "react-full-page";
import ReactFullpage from "@fullpage/react-fullpage";

import LoadingScreen from "./components/LoadingScreen";
import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/navbar/NavBar";
import AboutMe from "./components/AboutMe";
import Home from "./components/home/Home";
import FindMe from "./components/contact/FindMe";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";

import { videoFromDB } from "./config/indexDB";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: "desktop",
      width: 1500,
      FullPageMode: "full-page", // "full-page" will eable scroll effect, "normal" disables effect
      blobUrl: "",
    };
  }

  setFullPage = () => {
    let pageMode =
      this.state.FullPageMode === "full-page" ? "normal" : "full-page";
    this.setState({ FullPageMode: pageMode });
  };

  componentDidMount() {
    videoFromDB()
      .then((url) => {
        this.setState({ blobUrl: url });
      })
      .catch((err) => {
        console.log("unable to fetch background link");
        this.setState({ blobUrl: "some url" });
      });

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
          <VideoBackground blobUrl={this.state.blobUrl} />
          <Switch>
            <Route exact path="/">
              {/* <FullPage duration={100} scrollMode={this.state.FullPageMode}>
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
              </FullPage> */}
              <ReactFullpage
                //fullpage options
                scrollingSpeed={1000} /* Options here */
                anchors={["home", "aboutme", "findme"]}
                licenseKey="123"
                render={({ state, fullpageApi }) => {
                  return (
                    <ReactFullpage.Wrapper>
                      <Home />
                      <AboutMe />
                      <FindMe
                        windowWidth={this.state.width}
                        device={this.state.device}
                        setFullPage={(bol) => {
                          fullpageApi.setAllowScrolling(bol, "up");
                        }}
                      />
                    </ReactFullpage.Wrapper>
                  );
                }}
              />
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
