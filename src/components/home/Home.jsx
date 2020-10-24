import React from "react";
import ContentContainer from "../content-container/ContentContainer";
import Keyboard from "./Keyboard";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <ContentContainer>
          <div>
            <div style={textStyles}>
              <h1>Hello World</h1>
              <h2>It's Hanpeng Wang </h2>
              <h3>I develop applications for interests and good</h3>
            </div>
            <a href="#aboutme" style={bottomButtonStyles}>
              <button>know me more</button>
            </a>
          </div>

          {/* <Keyboard /> */}
        </ContentContainer>
      </div>
    );
  }
}

const bottomButtonStyles = {
  position: "absolute",
  bottom: "3vh",
  left: "calc(10vw + (90vw - 140px)/2)",
  textAlign: "center",
};

const textStyles = {
  marginTop: "30vh",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  textAlign: "center",
};
export default Home;
