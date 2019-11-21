import React from "react";
import Button from "./Button";

const MovieDetails = ({ movie, style }) => {
  // const [moviePos, setMoviePos] = useState(style);
  // const [moviePosStyle, setMoviePosStyle] = useState({
  //   marginLeft: movie.marginLeft
  // });
  // const disp = active ? "visible" : "none";

  // useEffect(() => {
  //   if (movie.title === "Joker") {
  //     // let cnv = document.createElement("canvas");
  //     // let img = document.getElementsByTagName("img")[6];
  //     // img.onload = () => {
  //     //   console.log(img, img.width, img.height);
  //     //   // cnv.width = img.width;
  //     //   // cnv.height = img.height;
  //     //   // console.log(cnv.width, cnv.height);
  //     //   let ctx = cnv.getContext("2d");
  //     //   ctx.drawImage(img, 0, 0, img.width, img.height);
  //     //   let imgData = ctx.getImageData(0, 0, cnv.width, cnv.height);
  //     //   console.log(imgData);
  //     // };
  //   }
  // }, []);

  // console.log(style);
  return (
    <>
      <div className="movieDetails" style={{ marginLeft: style.marginLeft }}>
        <div className="movieImg">
          <img src={movie.imgUrl} alt={movie.title} />
          {/* <div className="movieImgFilter"></div> */}
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

// function setMoviePosHelper(moviePos, setMoviePosStyle) {
//   switch (moviePos) {
//     case "shiftLeftOut":
//       console.log(moviePos);
//       setMoviePosStyle({
//         marginLeft: "-110vw"
//       });
//       break;
//     case "shiftRightOut":
//       console.log(moviePos);
//       setMoviePosStyle({
//         marginLeft: "110vw"
//       });
//       break;
//     case "shiftLeftIn":
//       console.log(moviePos);
//       setMoviePosStyle({
//         marginLeft: "0"
//       });
//       break;
//     case "shiftRightIn":
//       console.log(moviePos);
//       setMoviePosStyle({
//         marginLeft: "0"
//       });
//       break;
//     default:
//       console.log(moviePos);
//       setMoviePosStyle({
//         marginLeft: "0"
//       });
//   }
// }

export default MovieDetails;
