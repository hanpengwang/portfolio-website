import React, { useState } from "react";

import { Card, CardColumns, Container } from "react-bootstrap";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const [click, handleClick] = useState(false);
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
    <>
      <Card className={props.className}>
        <Card.Img
          src={props.media}
          onClick={() => {
            handleClick(!click);
          }}
          className={click ? "card-img-click" : ""}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Card.Link href={props.link} target="_blank">
            Get to know more
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
