import React, { useState, useEffect, useRef } from "react";

import "./ImageList.css";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);

    setSpans(Math.ceil(imageRef.current.clientHeight / 10));
  },[spans]);

  const { id, src } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}`}}>
     <a href={image.src} target="blank">
      <img ref={imageRef} alt={image.src} key={id} src={image.src} href={src} />
      </a>
    </div>
  );
}

export default ImageCard;
