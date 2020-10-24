import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    };
  }

  componentDidMount() {
    this.setState({
      device: mediaQuery(window.innerWidth),
    });
    window.addEventListener("resize", () => {
      this.setState({
        device: mediaQuery(window.innerWidth),
      });
    });
  }

  styles = {
    margin: "0 0 0 0",
  };

  render() {
    return (
      <Router>
        <div style={this.styles} className="app">
          <NavBar device={this.state.device} />
          <VideoBackground />
          <Switch>
            <Route exact path="/">
              <Home />
              <AboutMe />
              <FindMe />
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
    return "tablet";
  } else {
    return "phone";
  }
};

export default App;
