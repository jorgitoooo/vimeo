import React, { useState } from "react";

import Arrow from "./Arrow";
import Movies from "./Movies";

const Carousel = props => {
  const [movieIdx, setMovieIdx] = useState(0);
  const [movies, setMovies] = useState(moviesArr);

  function shiftLeft() {
    if (movieIdx < movies.length - 1) {
      setMovieIdx(movieIdx + 1);
      setMovies(
        movies.map(movie => {
          const curMargin = parseInt(movie.style.marginLeft);
          const newMovie = {
            ...movie,
            style: {
              ...movie.style,
              marginLeft: `${curMargin - 110}vw`
            }
          };
          return newMovie;
        })
      );
    }
  }
  function shiftRight() {
    if (movieIdx > 0) {
      setMovieIdx(movieIdx - 1);
      setMovies(
        movies.map(movie => {
          const curMargin = parseInt(movie.style.marginLeft);
          const newMovie = {
            ...movie,
            style: {
              ...movie.style,
              marginLeft: `${curMargin + 110}vw`
            }
          };
          return newMovie;
        })
      );
    }
  }
  return (
    <>
      <div className="carouselContainer">
        <div className="carouselContainerBg"></div>
        <Arrow
          className="arrowContainerLeft"
          shiftMovie={shiftLeft}
          orientation="left"
        />
        <Movies movies={movies} />
        <Arrow
          className="arrowContainerRight"
          shiftMovie={shiftRight}
          orientation="right"
        />
      </div>
    </>
  );
};

const moviesArr = [
  {
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMWE2OTdiY2MtM2ViNy00NmExLWIxZjYtYTVkNGJkNzgwYjVmXkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Waves",
    body:
      "Traces the journey of a suburban family - led by a well-intentioned but domineering father - as they navigate love, forgiveness, and coming together in the aftermath of a loss.",
    style: {
      marginLeft: "0vw",
      background: "var(--light-blue)"
    }
  },
  {
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA4OTk2MzktODQ4OC00ODQyLTkxYTMtYmIwMjUyZDI4ODRiXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_SY1000_SX675_AL_.jpg",
    title: "The Warrior Queen of Jhansi",
    body:
      "A tale of women's empowerment, The Warrior Queen of Jhansi tells the true story of Lakshmibai, the historic Queen of Jhansi who fiercely led her army against the British East India Company in the infamous mutiny of 1857.",
    style: {
      marginLeft: "110vw",
      background: "var(--red-orange)"
    }
  },
  {
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Joker",
    body:
      'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker"',
    style: {
      marginLeft: "220vw",
      background: "var(--red-gold)"
    }
  },
  {
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BODBjOTAzZmMtNGJkOC00M2M3LWI1MTctZjZlMzdiODBkMzc0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "The Addams Family",
    body:
      "The eccentrically macabre family moves to a bland suburb where Wednesday Addams' friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.",
    style: {
      marginLeft: "330vw",
      background: "var(--red-brown)"
    }
  },
  {
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BYjcxMjM4MjgtNTEwMi00ZmE2LTlhMWUtMzQ4OWFmYmQwM2NlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    title: "Countdown",
    body:
      "When a nurse downloads an app that claims to predict the moment a person will die, it tells her she only has three days to live. With the clock ticking and a figure haunting her, she must find a way to save her life before time runs out.",
    style: {
      marginLeft: "440vw",
      background: "var(--red-gray)"
    }
  }
];

export default Carousel;
