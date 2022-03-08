import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
import { keyframes, css } from "styled-components";

const ImageList = props => {


  const opaq = keyframes`
    0% { opacity: 0 };
    100% { opacity: 1 };
  `

  const imgStyle = css`
    duration: '800';
    animation-delay: ${opaq} .5s ease;
  `

  const images = props.images.map(image => {
    return (
      <ImageCard
        class="vignette"
        key={image.id}
        image={image}
        style={imgStyle}
        />
    )
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
