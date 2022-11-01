import React, { useState } from 'react'
import News_Article from './components/News_Article'
import styled from 'styled-components'
import Nav from './components/Nav'
import Form from './components/Form';

export default function App() {
  const [mode, setMode] = useState("headline");
  const [q, setQ] = useState(null);
  const [date, setDate] = useState(null);
  const StyledDiv =  styled.div`
    margin : 0px;
    padding : 10px;
    border : 1px black solid;
  `
  return (
    <StyledDiv>
      <Nav changeMode={(mode)=>{
        setMode(mode);
      }}></Nav>
      <Form onChangeQ={(_q)=>{
        setQ(_q);
      }}
      onChangeDate={(_date)=>{
        setDate(_date);
      }}
      ></Form>
      <News_Article Article_mode={mode}
      date={date} q={q}
      ></News_Article>
    </StyledDiv>
  )
}
