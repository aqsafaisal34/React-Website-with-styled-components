import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
    const Nav = styled.nav`
   .navbar-list{ 
    
    display : flex;
    gap : 2.8rem;
    
    
    li{
        list-style : none; 
        .navbar-link{
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.8rem;
              text-transform: uppercase;
              color: ${({ theme }) => theme.colors.black};
              transition: color 0.3s linear;
            }
            text-decoration : none;
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
           }
    }   
   }
   
    `
  return (
   
    <div>
      <Nav>
        <div className="menuIcon">
            <div className="navbar-list">
                <li>
                   <Link to = "/" className='navbar-link'>
                      Home
                   </Link>
                
                </li>
                 <li>
                <Link to = "/about" className='navbar-link'>
                     About
                   </Link>
                </li>
                <li>
                <Link to = "/service" className='navbar-link'>
                     Services
                   </Link>
                </li>
               
                <li>
                <Link to = "/contact" className='navbar-link'>
                    Contact
                   </Link>
                </li>
            </div>
        </div>
      </Nav>
    </div>
  )
}

export default Nav