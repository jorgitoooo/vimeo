import React from "react";

const Arrow = props => {
  const { orientation, shiftMovie } = props;

  return (
    <div onClick={shiftMovie} className="arrowContainer">
      <div className={`arrow ${orientation}`}></div>
    </div>
  );
};

export default Arrow;
