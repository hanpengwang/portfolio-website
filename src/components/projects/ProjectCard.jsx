import React from "react";

import { Card, CardColumns, Container } from "react-bootstrap";

export default function ProjectCard(props) {
  const cardStyles = {
    width: "400px",
    height: "400px",
    verticalAlign: "top",
    display: "inline-block",
    margin: "30px 10px 0 30px",
    backgroundColor: "rgba(255, 0, 0, 0)",
    boxShadow: "0px 0px 10px 1px rgba(224,224,224,1)",
  };
  return (
    <Card style={cardStyles} className={props.className}>
      <Card.Img src={props.media} style={{ width: "auto", height: "50%" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.link}>Get to know more</Card.Link>
      </Card.Body>
    </Card>
  );
}
