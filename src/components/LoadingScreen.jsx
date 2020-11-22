import React, { useEffect } from "react";
import Peng from "./peng/Peng";

import "./LoadingScreen.css";

export default function LoadingScreen(props) {
  return (
    <div className="loading-screen-container">
      <div className="peng-wrapper-loading">
        <Peng />
      </div>
    </div>
  );
}
