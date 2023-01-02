import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
    <MainHeader>
        <NavLink to="/">
        <img src='./images/download.png' className="logo" alt="" />
        </NavLink>
        <Navbar/>
    </MainHeader>
    </div>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8rem;
background-color: ${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
align-items: center;
.logo{
  height:auto;
  width:100%;
}
`

export default Header;