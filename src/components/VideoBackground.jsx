import React, { useEffect } from "react";
import backgroundVideo from "../assets/background-video-circle.mp4";

export default function VideoBackground(props) {
  useEffect(() => {
    // Update the document title using the browser API
    document.querySelector("#video-background").playbackRate = 1;
  }, []);

  return (
    <div>
      <video
        src="https://github.com/whpskg/portfolio-website/blob/master/src/assets/background-video-circle.mp4?raw=true"
        autoPlay
        loop
        playsInline
        muted
        style={{
          objectFit: "cover",
          position: "fixed",
          margin: "0 0 0 0",
          top: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
        id="video-background"
      ></video>
    </div>
  );
}
