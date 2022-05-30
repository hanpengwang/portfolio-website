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

          {/* footer */}
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "100%",
              color: "#00c9c8",
              textAlign: "center",
            }}
          >
            <p>
              <i class="fal fa-copyright"></i>
              2022 Hanpeng Wang
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
