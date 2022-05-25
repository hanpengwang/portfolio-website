
import React from "react";
import "./App.css";
import Contact from "./components-v2/contact/Contact";
import Resume from "./components-v2/resume/Resume";
import Portfolio from "./components-v2/portfolio/Portfolio";
import FrontCover from "./components-v2/front-cover/FrontCover";
import Nav from "./components-v2/nav/Nav";

class App extends React.Component {
  render() {
    return (
      <>
        <div id="rm-container" className="rm-container rm-closed">
          <Nav />
          <div className="rm-wrapper">
            <div className="rm-cover">
              <FrontCover />
              <Resume />
            </div>
            <Portfolio />
            <Contact />
          </div>
        </div>
      </>
    );
  }
}


export default App;
