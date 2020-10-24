import React from "react";
var sampleHtml = require("./sample-html.js");

class BlogPage extends React.Component {
  render() {
    return (
      <div style={blogCotainerStyles}>
        <div dangerouslySetInnerHTML={{ __html: sampleHtml }} />
      </div>
    );
  }
}

const blogCotainerStyles = {
  margin: "40px 100px 0px 100px",
};

const htmlStr = () => {
  return { __html: "" };
};

export default BlogPage;
