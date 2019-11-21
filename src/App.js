import React from "react";

// Components
import ContentComponent from "./Components/ContentComponent";
import Carousel from "./Components/Carousel";

// CSS
import "./styles/index.css";
import "./styles/containers.css";
import "./styles/contentComponent.css";
import "./styles/carouselComponent.css";

function App() {
  return (
    <>
      <div className="containers">
        <ContentComponent {...contentInfo0} />
      </div>
      <div className="gradientContainer1">
        <ContentComponent {...contentInfo1} contentReversed={true} />
      </div>
      <div className="gradientContainer2">
        <ContentComponent {...contentInfo2} />
      </div>
      <Carousel />
    </>
  );
}

const contentInfo0 = {
  imgSrc: "https://i.vimeocdn.com/video/595198868_505x160.jpg",
  altMessage: "MONSOON III",
  contentTitle: "MONSOON III",
  contentBody:
    "If you asked the average person, many would characterize this summer's monsoon as a down season. Not a lot of storms overall and it seemed generally more quiet. And in many ways it actually was a slower season. All told I chased about 36 days for this film, which was less than the 48 in 2015. We had an early start in late June, and then it was dead for almost three weeks. When I looked back and realized I chased 12 less days...yeah, it definitely had less action than normal."
};
const contentInfo1 = {
  imgSrc: "https://i.vimeocdn.com/video/589972810_530x315.jpg",
  altMessage: "BEAMS",
  contentTitle: "BEAMS",
  contentBody:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorum impedit quisquam sequi quidem facere eveniet necessitatibus vel saepe tenetur. Blanditiis aut magni qui incidunt laudantium enim beatae minus! Mollitia."
};
const contentInfo2 = {
  imgSrc: "https://i.vimeocdn.com/video/590587169_530x315.jpg",
  altMessage: "MOVE 2",
  contentTitle: "MOVE 2",
  contentBody:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorum impedit quisquam sequi quidem facere eveniet necessitatibus vel saepe tenetur. Blanditiis aut magni qui incidunt laudantium enim beatae minus! Mollitia."
};

export default App;
