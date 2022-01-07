import React from 'react';
import youtube_parser from './data/youtube_helper';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

  const videoId = youtube_parser(video.url);
  const videoThumb = `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.title}
        className="ui image"
        src={videoThumb}
      />
      <div className="content">
        <div className="header">
        <div style={{flex: "5"}}><p>{video.title}</p></div>
        <div style={{flex: "1"}}><p>{video.duration}</p></div>

        </div>
      </div>
    </div>
  );
};

export default VideoItem;
