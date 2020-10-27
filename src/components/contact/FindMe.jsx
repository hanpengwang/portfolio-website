import React from "react";
import ContentContainer from "../content-container/ContentContainer";
import Maps from "./Maps";
import Contact from "./Contact";

class FindMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerPadding: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.windowWidth !== this.props.windowWidth) {
      let maps = document.querySelector(".maps-container");
      let sidebar = document.querySelector(".sidebar");
      let containerElem = document.querySelector("#findme .content-container");
      containerElem.style.margin = 0;
      containerElem.style["padding-left"] = `${
        sidebar.offsetWidth +
        (this.props.windowWidth - sidebar.offsetWidth - maps.offsetWidth) / 2
      }px`;
    }
  }

  render() {
    return (
      <div id="findme">
        <ContentContainer>
          <Contact />
          <Maps />
        </ContentContainer>
      </div>
    );
  }
}

export default FindMe;
