import React from "react";
import ContentContainer from "./content-container/ContentContainer";

class AboutMe extends React.Component {
  styles = {};

  render() {
    return (
      <div id="aboutme">
        <ContentContainer>
          <h1>about me</h1>
          <p>
            in est vel turpis suscipit lacinia nec id orci. Sed quam enim,
            pulvinar in tincidunt vitae, sagittis non sem. Quisque malesuada
            iaculis urna vehicula mattis. Quisque leo massa, efficitur vel
          </p>
          <p>
            Vestibulum eros elit, sollicitudin semper sagittis a, tempor ac mi.
            Aenean tincidunt eros eu nulla vehicula malesuada. Sed tempus vel
            dui id iaculis. Morbi sollicitudin elementum velit eget placerat.
            Mauris facilisis fermentum diam, ut dignissim turpis luctus at.
            Mauris pretium vestibulum justo a dictum. Sed vel vulputate augue.
            Etiam vestibulum pretium vestibulum. Cras quis tempor sem. Fusce ex
            mauris, condimentum quis ipsum eu, dignissim efficitur elit. Integer
          </p>
          <p>
            Mauris pretium vestibulum justo a dictum. Sed vel vulputate augue.
            Etiam vestibulum pretium vestibulum. Cras quis tempor sem. Fusce ex
            mauris, condimentum quis ipsum eu, dignissim efficitur elit. Integer
          </p>
        </ContentContainer>
      </div>
    );
  }
}

export default AboutMe;
