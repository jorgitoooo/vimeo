import React from "react";
import PropTypes from "prop-types";

const Arrow = props => {
  const { className, orientation, shiftMovie } = props;

  return (
    <div onClick={shiftMovie} className={className}>
      <div className={`arrow ${orientation}`}></div>
    </div>
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
  shiftMovie: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired
};

export default Arrow;
