import React from 'react'
import style from 'styled-components'
import Form from './Form'

const StyledDiv = style.div`
    margin : 0px;
    margin-bottom : 10px;
    border : 1px black solid;
`

export default function Nav(props) {
  return (
    <StyledDiv>
        <a href='#' onClick={(event)=>{
            event.preventDefault();
            props.changeMode("headline");
        }}>headline</a>
        <a href='#' onClick={(event)=>{
            event.preventDefault();
            props.changeMode("custom");
        }}>custom</a>
    </StyledDiv>
  )
}
