import React from "react";
import { Card, CardColumns, Container } from "react-bootstrap";

import ContentContainer from "../content-container/ContentContainer";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ContentContainer style={{ textAlign: "center", border: "0" }}>
          <div>
            {projectData.map((x, i) => {
              return (
                <ProjectCard
                  media={x.projectMedia}
                  title={i}
                  text={x.projectDesc}
                  link={x.projectLink}
                  key={i}
                />
              );
            })}
          </div>
        </ContentContainer>
      </div>
    );
  }
}

function ProjectCard(props) {
  const cardStyles = {
    width: "400px",
    height: "400px",
    verticalAlign: "top",
    display: "inline-block",
    margin: "0 auto",
    marginLeft: "30px",
    marginTop: "30px",
  };
  return (
    <Card style={cardStyles}>
      <Card.Img
        src={props.media}
        style={{ width: "inherit", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{"project " + props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.link}>Get to know more</Card.Link>
      </Card.Body>
    </Card>
  );
}

const projectData = Array(5).fill({
  projectName: "project1",
  projectDesc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna dolor, tincidunt at urna ultricies, commodo tristique dolor. Nulla mollis, arcu eget fermentum egestas, mauris",
  projectMedia:
    "https://github.com/whpskg/covid-19-SafeDistancing/blob/master/assets/app-demo.gif?raw=true",
  projectLink: "https://github.com/",
});

export default Projects;
