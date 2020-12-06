import React, { useState } from "react";

import { Card } from "react-bootstrap";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const [click, handleClick] = useState(false);

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
