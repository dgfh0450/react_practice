import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from './Form'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin : 0px;
    margin-bottom : 10px;
`

export default function Nav(props) {
  return (
    <StyledDiv>
      <NavLink to='/headline' style={({ isActive }) => ({
              width : '120px',
              textDecoration:'none',
              paddingRight:'10px',
              borderRight:'1px black solid',
              color:'black'
            })} onClick={()=>{
        props.onChangeMode("headline");
      }} >HEADLINE</NavLink>
      <NavLink to='/custom' style={({ isActive }) => ({
              width : '120px',
              textDecoration:'none',
              paddingLeft:'10px',
              color:'black'
            })}  onClick={()=>{
        props.onChangeMode("custom");
      }}>CUSTOM</NavLink>
    </StyledDiv>
  )
}
