import React, { useEffect, useState } from "react";
import backgroundVideo from "../assets/background-video-circle.mp4";

import { openDB, deleteDB, wrap, unwrap } from "idb";

export default function VideoBackground(props) {
  const [videoBlob, setVideoBlob] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    document.querySelector("#video-background").playbackRate = 1;
  }, []);

  return (
    <div>
      <video
        src={props.blobUrl}
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
