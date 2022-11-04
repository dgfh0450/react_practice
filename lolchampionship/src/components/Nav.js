import React from 'react'
import {Link as RouterLink, NavLink} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
    padding:10px 0px;
    margin : 0px 10px;
    opacity:0.6;
    color:black;
    font-family:'RIXGOL';
    text-decoration: none;
    &:hover {
        border-bottom:3px black solid;
        font-weight:bold;
        opacity:1;
    }
    &.active { 
      border-bottom:3px black solid;
      font-weight:bold;
      opacity:1;
    }
`


export default function Nav() {
  return (
    <div style={{marginBottom:'10px', padding:'10px'}}>
        <StyledLink to='/'>home</StyledLink>
        <StyledLink to='/pvp'>pvp</StyledLink>
        <StyledLink to='/championship'>world</StyledLink>
    </div>
  )
}
