import React, { useState, useEffect } from "react";

const MovieDetails = ({ movie, style }) => {
  const [moviePos, setMoviePos] = useState(style);
  // const [moviePosStyle, setMoviePosStyle] = useState({
  //   marginLeft: movie.marginLeft
  // });
  // const disp = active ? "visible" : "none";

  useEffect(() => {
    setMoviePos(style);
  }, [style]);

  // console.log(style);
  return (
    <>
      <div className="movieDetails" style={style}>
        <img src="" alt="Movie" />
        <div className="movieInfo">
          <h2>{movie.title}</h2>
          <p>{movie.body}</p>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div className="movieBg" style={{ marginLeft: movie.marginLeft }}></div>
  //     <div className="movieDetailsContainer">
  //       <div className="movieDetails" style={{ marginLeft: movie.marginLeft }}>
  //         <img src="" alt="Movie" />
  //         <div className="movieInfo">
  //           <h2>{movie.title}</h2>
  //           <p>{movie.body}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

function setMoviePosHelper(moviePos, setMoviePosStyle) {
  switch (moviePos) {
    case "shiftLeftOut":
      console.log(moviePos);
      setMoviePosStyle({
        marginLeft: "-110vw"
      });
      break;
    case "shiftRightOut":
      console.log(moviePos);
      setMoviePosStyle({
        marginLeft: "110vw"
      });
      break;
    case "shiftLeftIn":
      console.log(moviePos);
      setMoviePosStyle({
        marginLeft: "0"
      });
      break;
    case "shiftRightIn":
      console.log(moviePos);
      setMoviePosStyle({
        marginLeft: "0"
      });
      break;
    default:
      console.log(moviePos);
      setMoviePosStyle({
        marginLeft: "0"
      });
  }
}

export default MovieDetails;
