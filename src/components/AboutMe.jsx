import React from "react";
import ContentContainer from "./content-container/ContentContainer";

class AboutMe extends React.Component {
  styles = {};

  render() {
    return (
      <div id="aboutme">
        <ContentContainer>
          <h1>Who's Hanpeng?</h1>
          <p spellCheck="true">
            I'm software developer based in Halifax Canada, I love to build
            software products that are used by many people. I came to canada for
            my undergraduate studies away from my lovely hometown Shandong. Over
            the past a few years, I have been working with different industries
            and diversing my background. Taking new challenges and bringing
            values to people I care become my everyday task.
          </p>
          <p>I am now open to opportunies either occupational or habitual.</p>
        </ContentContainer>
      </div>
    );
  }
}

export default AboutMe;
