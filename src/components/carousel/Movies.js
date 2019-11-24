import React from "react";
import PropTypes from "prop-types";

// Components
import MovieDetails from "./MovieDetails";

const Movies = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.map(
          (movie, idx) =>
            movie && (
              <div
                key={idx}
                className="movieBg"
                style={{
                  marginLeft: movie.style.marginLeft,
                  backgroundImage: `url(${movie.imgUrl})`
                }}
              ></div>
            )
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

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Movies;
