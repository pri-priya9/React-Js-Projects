import React, { useState, useLayoutEffect } from "react";
import './UseLayoutEffect.css'

const WindowSizeTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [message, setMessage] = useState("");

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useLayoutEffect(() => {
    if (width < 600) {
      setMessage("Screen size is Small");
    } else if (width < 1200) {
      setMessage("Screen size is Medium");
    } else {
      setMessage("Screen size is Large");
    }
  }, [width]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="uselayout-h1">Window Size Tracker</h1>
      <p className="uselayout-p">Current Width: {width}px</p>
      <p className="uselayout-p">{message}</p>
    </div>
  );
};

export default WindowSizeTracker;
