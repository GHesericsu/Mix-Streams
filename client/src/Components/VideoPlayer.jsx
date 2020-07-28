import React from 'react';
import videojs from 'video.js';

const options = {
  autoplay: true,
  controls: true,
  liveui: true,
  height: 400,
  sources: [{
    src: 'http://127.0.0.1:8888/live/eric.flv',
    type: 'application/x-mpegURL',
  }],
  fluid: true,
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoOptions: options,
    };
  }

  componentDidMount() {
    this.player = videojs(this.videoNode, this.state.videoOptions, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={(node) => this.videoNode = node} className="video-js" />
        </div>
      </div>
    );
  }
}


export default VideoPlayer;
