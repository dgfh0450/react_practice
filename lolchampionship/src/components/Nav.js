import React from 'react'
import {Link as RouterLink, NavLink} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
    padding:10px 0px;
    margin : 0px 10px;
    opacity:0.6;
    color:white;
    font-family:'RIXGOL';
    text-decoration: none;
    &:hover {
        border-bottom:3px rgba(255,255,255,1) solid;
        font-weight:bold;
        opacity:1;
    }
    &.active { 
      border-bottom:3px rgba(255,255,255,1) solid;
      font-weight:bold;
      opacity:1;
    }
`
const HomeLink = styled(NavLink)`
  padding:10px 0px;
  margin : 0px 10px;
  opacity:0.6;
  &:hover {
    opacity:1;

` 
const src = process.env.PUBLIC_URL+'/images/lolesports.png'

export default function Nav() {
  return (
    <div style={{padding:'20px', backgroundColor:'#111111'}}>
        <HomeLink to='/'><img style={{width:'30px', height:'30px', transform:'translateY(30%)'}} src={src}></img></HomeLink>
        <StyledLink to='/pvp'>전적 검색</StyledLink>
        <StyledLink to='/championship'>월즈</StyledLink>
    </div>
  )
}
