import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import videozz from "../../data/videos/videozz";

const Videos = () => {
  const [videos, setVideos] = useState(videozz);
  const [selectedVideo, setSelectedVideo] = useState(videozz[0]);
  useEffect(() => {
    setVideos(videozz);
    setSelectedVideo(selectedVideo);
    document.querySelector(".separator").scrollIntoView({ behavior: "smooth" });
  }, [videos, selectedVideo]);

  return (
    <div className="ui container" id="screen">
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            <br />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
