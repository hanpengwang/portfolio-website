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
        // src="https://static.videezy.com/system/resources/previews/000/033/108/original/4k-abstract-gold-mountains-polygons-background-loop-final.mp4"
        src={backgroundVideo}
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
