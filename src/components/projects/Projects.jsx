import React from "react";

import ContentContainer from "../content-container/ContentContainer";
import ProjectCard from "./ProjectCard";

import "./Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [],
    };
    this.projectAPI =
      "https://d90832a0.us-south.apigw.appdomain.cloud/get-projects/";
  }

  componentDidMount() {
    (async () => {
      const rawResponse = await fetch(this.projectAPI, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      });
      const res = await rawResponse.json();
      this.setState({ projectData: res.projects });
    })();
  }
  render() {
    return (
      <div>
        <ContentContainer style={{ textAlign: "center" }}>
          {this.state.projectData.map((x, i) => {
            return (
              <ProjectCard
                media={x.projectMedia}
                title={x.projectName}
                text={x.projectDesc}
                link={x.projectLink}
                key={i}
                className={`slide-in ${i % 2 ? "from-right" : "from-left"}`}
              />
            );
          })}
        </ContentContainer>
      </div>
    );
  }
}

export default Projects;
