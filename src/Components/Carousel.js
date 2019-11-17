import React, { useState, useEffect } from "react";

import Arrow from "./Arrow";
import Movies from "./Movies";

const Carousel = props => {
  const [movieIdx, setMovieIdx] = useState(0);
  // const [moviePos, setMoviePos] = useState("");
  // const [movieBuffer, setMovieBuffer] = useState(
  //   movies.slice(movieIdx, movieIdx + 3)
  // );

  // const positions = ["-110vh", "0", "110vh"];

  useEffect(() => {
    // movies = movies.map((movie, idx) => ({
    //   ...movie,
    //   marginLeft: `${idx * 110}vh`
    // }));
    // console.log(movies);
  }, []);

  function shiftLeft() {
    if (movieIdx < movies.length - 1) {
      // setMoviePos("shiftLeftOut");
      setMovieIdx(movieIdx + 1);
      // Movie position is state (move to MovieDetails component)
      movies = movies.map(movie => {
        const curMargin = parseInt(movie.style.marginLeft);

        console.log(movie.title, `${curMargin - 110}vw`);

        const newMovie = {
          ...movie,
          style: {
            marginLeft: `${curMargin - 110}vw`
          }
        };
        // console.log("New movie: ", newMovie);
        return newMovie;
      });
    }
  }
  function shiftRight() {
    if (movieIdx > 0) {
      // setMoviePos("shiftRightOut");
      setMovieIdx(movieIdx - 1);
      movies = movies.map(movie => {
        const curMargin = parseInt(movie.style.marginLeft);

        console.log(movie.title, `${curMargin + 110}vw`);

        const newMovie = {
          ...movie,
          style: {
            marginLeft: `${curMargin + 110}vw`
          }
        };
        // console.log("New movie: ", newMovie);
        return newMovie;
      });
    }
  }
  return (
    <>
      <div className="carouselContainer">
        <Arrow shiftMovie={shiftLeft} orientation="left" />
        <Movies movies={movies} />
        {/* {movieBuffer.map((movie, idx) => (
            <MovieDetails
              key={idx}
              moviePos={moviePos}
              movie={movie}
              active={idx == 1 ? true : false}
            />
          ))} */}
        {/* <MovieDetails moviePos={moviePos} /> */}
        <Arrow shiftMovie={shiftRight} orientation="right" />
      </div>
    </>
  );
};

let movies = [
  {
    title: "Movie 1",
    body: "Body 1",
    style: {
      marginLeft: "0vw"
    }
  },
  {
    title: "Movie 2",
    body: "Body 2",
    style: {
      marginLeft: "110vw"
    }
  },
  {
    title: "Movie 3",
    body: "Body 3",
    style: {
      marginLeft: "220vw"
    }
  },
  {
    title: "Movie 4",
    body: "Body 4",
    style: {
      marginLeft: "330vw"
    }
  },
  {
    title: "Movie 5",
    body: "Body 5",
    style: {
      marginLeft: "440vw"
    }
  },
  {
    title: "Movie 6",
    body: "Body 6",
    style: {
      marginLeft: "550vw"
    }
  }
];

export default Carousel;
