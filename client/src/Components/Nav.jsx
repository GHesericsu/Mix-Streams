import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

const NavItem = styled.li`
  display:inline;
  margin-right: 25px;
`;

const NavButton = styled.button`
  background:none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 30px;
  color: #F2E9E4;
`;

const RightNavButton = styled(NavButton)`
  float: right;
`;

const Nav = ( {changeToVideo}) => (
  <NavWrapper>
    <NavItem>
      <NavButton type="button">Mix Streams Home</NavButton>
    </NavItem>
    <NavItem>
      <NavButton type="button" OnClick={changeToVideo}>LiveStreams</NavButton>
    </NavItem>
    <NavItem>
      <NavButton type="button">Creator Login</NavButton>
    </NavItem>
    <NavItem>
      <RightNavButton type="button">Logout</RightNavButton>
    </NavItem>
  </NavWrapper>
);

export default Nav;
