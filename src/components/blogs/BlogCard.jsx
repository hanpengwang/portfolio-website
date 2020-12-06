import React from "react";
import "./BlogCard.css";

export default function BlogCard(props) {
  return (
    <div className="blog-card-container">
      <img src={props.image} alt="" className="blog-image" />
      <div className="blog-detail">
        <h1>
          <a href={props.link}>{props.title}</a>
        </h1>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}
