import React from "react";

const Arrow = props => {
  const { orientation } = props;
  return (
    <div className="arrowContainer">
      <div className={`arrow ${orientation}`}></div>
    </div>
  );
};

export default Arrow;
