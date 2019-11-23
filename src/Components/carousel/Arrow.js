import React from "react";

const Arrow = props => {
  const { className, orientation, shiftMovie } = props;

  return (
    <div onClick={shiftMovie} className={className}>
      <div className={`arrow ${orientation}`}></div>
    </div>
  );
};

export default Arrow;
