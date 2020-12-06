import React from "react";
import "./ContentContainer.css";

export default function ContentContainer(props) {
  return (
    <div className="content-container" style={props.style}>
      {props.children}
    </div>
  );
}
