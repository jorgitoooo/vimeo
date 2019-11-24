import React from "react";
import PropTypes from "prop-types";

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

ContentComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altMessage: PropTypes.string.isRequired,
  contentTitle: PropTypes.string.isRequired,
  contentBody: PropTypes.string.isRequired
};

export default ContentComponent;
