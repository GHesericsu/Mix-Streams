import React from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

import Nav from './Nav.jsx';
import LiveStreams from './LiveStreams.jsx';
import Payment from './Payment.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import FlvPlayer from './FlvPlayer.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4A4E69;
    font-family: 'Rowdies', cursive;
    color: #F2E9E4;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  background-color: #22223B;
  width: 100%;
  Height: 100%;
  color: #6034b2;
  padding: 8px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'LiveStreams',
    };
    this.changeToPayment = this.changeToPayment.bind(this);
    this.changeToVideo = this.changeToVideo.bind(this);
  }

  changeToPayment(event) {
    event.preventDefault();
    this.setState({
      page: 'Payment'
    })
  }

  changeToVideo(event) {
    event.preventDefault();
    this.setState({
      page:'FlvPlayer'
    })
  }

  // eslint-disable-next-line class-methods-use-this
  renderSwitch(page) {
    switch (page) {
      case 'LiveStreams':
        return <LiveStreams changeToPayment={this.changeToPayment} />;
      case 'Payment':
        return <Payment changeToVideo={this.changeToVideo} />;
      case 'VideoPlayer':
        return <VideoPlayer />;
      case 'FlvPlayer':
        return <FlvPlayer />;
      default:
        return null;
    }
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <GlobalStyle />
        <Wrapper>
          <Nav />
        </Wrapper>
        {this.renderSwitch(page)}
      </div>
    );
  }
}

export default App;
