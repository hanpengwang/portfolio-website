import React from "react";

import CodeIntro from "./CodeIntro";

class FrontCover extends React.Component {
  render() {
    return (
      <div id="home" className="rm-front page">

      <div className="antiscroll-wrap">

        <div className="antiscroll-inner">
          {/* COVER IMAGE */}
          <div className="cover">
            {/* cover-image-holder */}
            <div className="cover-image-holder">
              <img src="images/site/cover.jpg" alt="cover-image" />
            </div>

            <h1>Hanpeng Wang</h1>
            {/* title */}
            {/* slogan */}
            <h2>Software Engineer & Technology Consultant</h2>

            <CodeIntro />
            {/* slogan */}
            {/* extra titles */}
            {/* <h3><span>I AM FROM</span> EARTH</h3>
            <h3><span>I CREATE</span> HTML5 websites</h3>
            <h3><span>I LIKE</span> minimalistic design</h3>
            <h3><span>FREELANCE</span> Available</h3> */}
            {/* extra titles --
                            
                            <!-- open link */}
            <a href="#/resume" className="rm-button-open ribbon">
              <span className="ribbon-stitches-top" />
              <strong className="ribbon-content">OPEN</strong>
              <span className="ribbon-stitches-bottom" />
            </a>

            {/* <div className="latest-from-blog">
              <h3>Latest From The Blog
                <a className="button2" href="blog.html">All Posts</a>
              </h3>
              <div className="blog-bar">
                <h2><a href="blog-single.html">Runaway A Road Adventure</a></h2>
              </div>
            </div> */}

 
          </div>

        </div>

      </div>

    </div>
    );
  }
}


export default FrontCover;
