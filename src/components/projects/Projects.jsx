import React from "react";

import ContentContainer from "../content-container/ContentContainer";
import ProjectCard from "./ProjectCard";

import staticData from "./ProjectData";

import "./Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [],
      largeMedia: "",
    };
    // this.projectAPI =
    //   "https://d90832a0.us-south.apigw.appdomain.cloud/get-projects/";
  }

  componentDidMount() {
    // (async () => {
    //   const rawResponse = await fetch(this.projectAPI, {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(this.state.form),
    //   });
    //   const res = await rawResponse.json();
    //   this.setState({ projectData: res.projects });

    // })();

    //for local testing static data
    this.setState({ projectData: staticData });
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

          {/* <div class="project-media-large">
            <img
              src="https://github.com/whpskg/covid-19-SafeDistancing/blob/master/assets/app-demo.gif?raw=true"
              alt=""
              style={{ position: "relative", left: "15vw" }}
            />
          </div> */}
        </ContentContainer>
      </div>
    );
  }
}

// const staticData = Array(9).fill({
//   id: "guess-your-age",
//   _rev: "1-86a65a925469ce21b1c974833e8cb296",
//   projectDesc: "Super fun app guesses you and your friends age :)",
//   projectLink: "https://github.com/whpskg/Full-Stack-ML",
//   projectMedia:
//     "https://github.com/whpskg/covid-19-SafeDistancing/blob/master/assets/app-demo.gif?raw=true",
//   projectName: "guess-your-age",
// });

export default Projects;
