import React from "react";

class FrontCover extends React.Component {
  render() {
    return (
      <div id="home" className="rm-front page">
      {/* .antiscroll-wrap */}
      <div className="antiscroll-wrap">
        {/* .antiscroll-inner */}
        <div className="antiscroll-inner">
          {/* COVER IMAGE */}
          <div className="cover">
            {/* cover-image-holder */}
            <div className="cover-image-holder">
              <img src="images/site/cover.jpg" alt="cover-image" />
            </div>
            {/* cover-image-holder */}
            {/* title */}
            <h1>Hanpeng Wang</h1>
            {/* title */}
            {/* slogan */}
            <h2>Freelance UI/UX Designer &amp; writer</h2>
            {/* slogan */}
            {/* extra titles */}
            <h3><span>I AM FROM</span> EARTH</h3>
            <h3><span>I CREATE</span> HTML5 websites</h3>
            <h3><span>I LIKE</span> minimalistic design</h3>
            <h3><span>FREELANCE</span> Available</h3>
            {/* extra titles --
                            
                            <!-- open link */}
            <a href="#/resume" className="rm-button-open ribbon">
              <span className="ribbon-stitches-top" />
              <strong className="ribbon-content">OPEN</strong>
              <span className="ribbon-stitches-bottom" />
            </a>
            {/* open link */}
            {/* latest-from-blog */}
            <div className="latest-from-blog">
              <h3>Latest From The Blog
                <a className="button2" href="blog.html">All Posts</a>
              </h3>
              <div className="blog-bar">
                <h2><a href="blog-single.html">Runaway A Road Adventure</a></h2>
              </div>
            </div>
            {/* latest-from-blog */}
            {/* widget : twitter */}
            <aside className="widget widget-twitter">
              <a href="https://twitter.com/envato" className="twitter-link" target="_blank" />
              <div id="twitter-list" />
            </aside>
            {/* widget : twitter */}
          </div>
          {/* COVER IMAGE */}
        </div>
        {/* .antiscroll-inner */}
      </div>
      {/* .antiscroll-wrap */}
    </div>
    );
  }
}


export default FrontCover;
