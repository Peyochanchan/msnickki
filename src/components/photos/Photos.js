import React, { useState, useEffect } from 'react';
import ImageList from './ImageList';
import pictures from '../../data/pictures/pictures';

const Photos = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(pictures);
  },[images])


  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <ImageList images={images} />
    </div>
  );
};


export default Photos;
