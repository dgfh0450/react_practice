import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to='/headline' onClick={()=>{
        props.onChangeMode("headline");
      }}>headline</Link>
      <Link to='/custom' onClick={()=>{
        props.onChangeMode("custom");
      }}>custom</Link>
    </StyledDiv>
  )
}
