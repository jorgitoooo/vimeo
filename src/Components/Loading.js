import React, { useState, useEffect } from "react";

const Loading = () => {
  const [visibility, setVisibility] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibility((visibility + 1) % 4);
    }, 350);
    return () => {
      clearTimeout(timeout);
    };
  }, [visibility]);
  return (
    <div className="loadingScreen">
      <div className="loadingContainer">
        <div
          className="loadingDot"
          style={{ opacity: visibility >= 1 ? 1 : 0 }}
        ></div>
        <div
          className="loadingDot"
          style={{ opacity: visibility >= 2 ? 1 : 0 }}
        ></div>
        <div
          className="loadingDot"
          style={{ opacity: visibility === 3 ? 1 : 0 }}
        ></div>
      </div>
    </div>
  );
};
export default Loading;
