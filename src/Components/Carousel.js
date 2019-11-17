import React from "react";

import Arrow from "./Arrow";

const Carousel = props => {
  return (
    <>
      <div className="carouselContainer">
        <Arrow orientation="left" />
        <div className="movieDetails"></div>
        <Arrow orientation="right" />
      </div>
    </>
  );
};

export default Carousel;
