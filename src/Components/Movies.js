import React from "react";

import MovieDetails from "./MovieDetails";

const Movies = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.map(
          movie => movie && <div className="movieBg" style={movie.style}></div>
        )}
      <div className="movieDetailsContainer">
        {movies &&
          movies.map(
            (movie, idx) =>
              movie && (
                <MovieDetails key={idx} movie={movie} style={movie.style} />
              )
          )}
      </div>
    </>
  );
};

export default Movies;
