import React from "react";
import PlayIcon from "./PlayIcon";

const Button = ({ value, icon, ...props }) => {
  return (
    <button {...props}>
      {icon ? <PlayIcon className="playIcon" /> : null}
      {value}
    </button>
  );
};

export default Button;
