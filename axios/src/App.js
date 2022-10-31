import React, { useState } from 'react'
import News_Article from './components/News_Article'
import styled from 'styled-components'
import Nav from './components/Nav'

export default function App() {
  const [mode, setMode] = useState("headline");
  const StyledDiv =  styled.div`
    margin : 0px;
    padding : 10px;
    border : 1px black solid;
  `
  console.log(mode);
  return (
    <StyledDiv>
      <Nav changeMode={(mode)=>{
        setMode(mode);
      }}></Nav>
      <News_Article Article_mode={mode}></News_Article>
    </StyledDiv>
  )
}
