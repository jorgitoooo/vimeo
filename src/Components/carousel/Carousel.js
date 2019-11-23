import React, { useState, useEffect } from "react";

import Arrow from "./Arrow";
import Movies from "./Movies";

const Carousel = props => {
  const [movieIdx, setMovieIdx] = useState(0);

  useEffect(() => {
    // movies = movies.map((movie, idx) => ({
    //   ...movie,
    //   marginLeft: `${idx * 110}vh`
    // }));
    // console.log(movies);
  }, []);

  function shiftLeft() {
    if (movieIdx < movies.length - 1) {
      setMovieIdx(movieIdx + 1);
      // Movie position is state (move to MovieDetails component)
      movies = movies.map(movie => {
        const curMargin = parseInt(movie.style.marginLeft);
        const newMovie = {
          ...movie,
          style: {
            ...movie.style,
            marginLeft: `${curMargin - 110}vw`
          }
        };
        return newMovie;
      });
    }
  }
  function shiftRight() {
    if (movieIdx > 0) {
      setMovieIdx(movieIdx - 1);
      movies = movies.map(movie => {
        const curMargin = parseInt(movie.style.marginLeft);
        const newMovie = {
          ...movie,
          style: {
            ...movie.style,
            marginLeft: `${curMargin + 110}vw`
          }
        };
        return newMovie;
      });
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

/*
  --light-blue: rgb(31, 127, 192);
  --red-orange: rgb(187, 93, 15);
  --red-gold: rgb(192, 113, 24);
  --red-brown: rgb(185, 100, 19);
  --red-gray: rgb(153, 80, 78);
*/
let movies = [
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
  // {
  //   imgUrl:
  //     "https://m.media-amazon.com/images/M/MV5BOTQxOWQwNzctMzAxZi00MTNmLTg1MmYtNzZkMDVjODU0NmZkXkEyXkFqcGdeQXVyNDc4MzI1NDM@._V1_SY1000_CR0,0,909,1000_AL_.jpg",
  //   title: "All Rise",
  //   body:
  //     '"Monster" is what the prosecutor calls 17 year old honors student Steve Harmon. He is being charged with felony murder. But is Steve really a monster? Adapted from the best-selling novel of the same name by Walter Dean Myers.',
  //   style: {
  //     marginLeft: "220vw"
  //   }
  // },
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
