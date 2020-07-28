import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  margin: 20px;
  cursor: pointer;
  width: 400px;
  &:hover {
    border: red 5px;
  }
`

const LiveStreams = ( { changeToPayment }) => {

  return (
    <div>
      Current Live Streams
      <div>
        <Image onClick={changeToPayment} src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/ericsulive.webp" alt="video thumbnail" />
      </div>
    </div>
  )
};

export default LiveStreams;
