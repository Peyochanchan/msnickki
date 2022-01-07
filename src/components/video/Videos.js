import React, { useState, useEffect } from "react";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import videozz from './data/videozz';


const Videos = () => {
  const [videos, setVideos] = useState(videozz);
  const [selectedVideo, setSelectedVideo] = useState(videozz[0])
  useEffect(() => {
    setVideos(videozz);
    setSelectedVideo(selectedVideo);
    document.getElementById('screen').scrollIntoView({behavior: "smooth"})
  }, [videos, selectedVideo]);

  const handleClick = () => {
    window.open("https://www.youtube.com/results?search_query=ms+nickki+");
  }

  return (
    <div className="ui container" id="screen">
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            <br />
            <h3 className="ui header_yt">
  <i className="large icons">
      <i className="red youtube link icon" onClick={handleClick}></i>
      More on Youtube
      </i>
      </h3>
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Videos;
