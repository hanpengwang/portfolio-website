import React from "react";
import ContentContainer from "./content-container/ContentContainer";
import "./AboutMe.css";

class AboutMe extends React.Component {
  styles = {};

  render() {
    return (
      <div className="section">
        <ContentContainer>
          <div className="aboutme-text">
            <h1>Who's Hanpeng?</h1>
            <p spellCheck="true">
              I'm a software developer based in Halifax-Nova Scotia. I spent
              most of life time in China and Canada. While I'm not coding, I
              tend to play some basketball and that's still my favorite thing
              since little
            </p>

            <p>
              I love to build software applications that many people can benefit
              from, and passionate about learning and leveraging new
              technologies.
            </p>
            <p>
              I'm looking forward to connecting with people from different
              domains and sharing ideas.
            </p>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default AboutMe;
