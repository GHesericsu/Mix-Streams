import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  margin: 20px;

  width: 400px;
`

const LiveStreams = () => {

  return (
    <div>
      Current Live Streams
      <div>
        <Image src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/ericsulive.webp" alt="video thumbnail" />
      </div>
    </div>
  )
};

export default LiveStreams;
