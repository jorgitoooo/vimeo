import React from "react";

const ContentComponent = props => {
  const {
    imgSrc,
    altMessage,
    contentTitle,
    contentBody,
    contentReversed
  } = props;

  return (
    <div className="contentContainer">
      <div className="contentInfo">
        <h2>{contentTitle}</h2>
        <p>{contentBody}</p>
      </div>
      <img
        className={`contentImage ${
          contentReversed ? "contentImageReversed" : ""
        }`}
        src={imgSrc}
        alt={altMessage}
      />
    </div>
  );
};

export default ContentComponent;
