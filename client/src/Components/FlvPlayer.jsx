import React from 'react';
import { ReactFlvPlayer } from 'react-flv-player';

const FlvPlayer = () => (
  <div>
    <ReactFlvPlayer
      url="http://localhost:8888/live/eric.flv"
      heigh="1000px"
      width="800px"
      isMuted={true}
      isLive={true}
      showControls={true}
    />
  </div>
);

export default FlvPlayer;
