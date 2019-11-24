import React from "react";
import PropTypes from "prop-types";

// Components
import PlayIcon from "./PlayIcon";

const Button = ({ value, icon, ...props }) => {
  return (
    <button {...props}>
      {icon ? <PlayIcon className="playIcon" /> : null}
      {value}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default Button;
