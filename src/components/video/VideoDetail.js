import React from 'react';
import youtube_parser from './data/youtube_helper';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = youtube_parser(video.url);
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&color=white&enable=jsapi=0`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoUrl} allowfullscreen="1"/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
