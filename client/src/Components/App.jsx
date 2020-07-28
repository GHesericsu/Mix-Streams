import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4A4E69;
    font-family: 'Rowdies', cursive;
    color: #F2E9E4;
    font-weight: 300;
    font-size: 18px;
  }
`

import Nav from './Nav.jsx';

const Wrapper = styled.div`
  background-color: #22223B;
  width: 100%;
  Height: 100%;
  color: #6034b2;
  padding: 8px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      username: '',
    };
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Wrapper>
          <Nav />
        </Wrapper>
        This is my APP
      </div>
    );
  }
}

export default App;