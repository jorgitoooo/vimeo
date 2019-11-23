import React from "react";
import Button from "./Button";

const MovieDetails = ({ movie, style }) => {
  return (
    <>
      <div className="movieDetails" style={{ marginLeft: style.marginLeft }}>
        <div className="movieImg">
          <img src={movie.imgUrl} alt={movie.title} />
        </div>
        <div className="movieInfo">
          <h2>{movie.title}</h2>
          <p>{movie.body}</p>
          <div className="btnContainer">
            <Button
              className="buyNowBtn"
              style={{ background: style.background }}
              icon={true}
              value="Buy Now"
            />
            <Button className="watchTrailerBtn" value="Watch Trailer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
