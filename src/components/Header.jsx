import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/images.png'
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
    <MainHeader>
        <NavLink to="/">
        <img src={Logo} className="logo" alt="" />
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
  width:50%;
}
`

export default Header;