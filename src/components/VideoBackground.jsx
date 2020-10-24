import React from "react";

export default function VideoBackground(props) {
  return (
    <div>
      <video
        src="https://static.videezy.com/system/resources/previews/000/033/108/original/4k-abstract-gold-mountains-polygons-background-loop-final.mp4"
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
          opacity: "0.7",
        }}
      ></video>
    </div>
  );
}
