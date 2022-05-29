import React from "react";

import CodeIntro from "./CodeIntro";

class FrontCover extends React.Component {
  render() {
    return (
      <div id="home" className="rm-front page">
        <div className="antiscroll-wrap">
          <div className="antiscroll-inner">
            {/* COVER IMAGE */}
            <div className="cover">
              {/* cover-image-holder */}
              <div className="cover-image-holder">
                <img
                  src="https://c.tenor.com/C6qR8z_eVGEAAAAd/star-wars-galaxy.gif"
                  alt="cover-image"
                />
              </div>
              <h1>Hanpeng Wang</h1>
              <h2>Software Engineer & Technology Consultant</h2>
              <CodeIntro />
              <a href="#/resume" className="rm-button-open ribbon">
                <span className="ribbon-stitches-top" />
                <strong className="ribbon-content">OPEN</strong>
                <span className="ribbon-stitches-bottom" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontCover;
