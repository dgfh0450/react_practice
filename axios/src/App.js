import React, { useState } from 'react'
import News_Article from './components/News_Article'
import styled from 'styled-components'
import Nav from './components/Nav'
import Form from './components/Form';

export default function App() {
  var Current_date = new Date();
  const [mode, setMode] = useState("headline");
  const [q, setQ] = useState(null);
  const [date_to, setDate_to] = useState(Current_date.getFullYear()+'-'+(Current_date.getMonth()+1)+'-'+Current_date.getDate());
  const [date_from, setDate_from] = useState(null);
  const [page, setPage] = useState(1);
  const StyledDiv =  styled.div`
    margin : 0px;
    padding : 10px;
    border : 1px black solid;
    text-align : center;
  `
  let form, date=null;
  if(mode=="custom") {
    form = <Form onChangeQ={(_q)=>{
      setQ(_q);
    }}
    onChangeDate={(_date_from, _date_to)=>{
      setDate_to(_date_to);
      setDate_from(_date_from);
    }}
    ></Form>
  }
  else if(mode=="headline") {
    form = null;
  }
  return (
    <StyledDiv>
      <Nav changeMode={(mode)=>{
        setMode(mode);
      }}></Nav>
      {form}
      <News_Article Article_mode={mode}
      date_to={date_to} q={q} date_from={date_from}
      page={page}
      ></News_Article>
      <button onClick={()=>{
        setPage(page-1);
      }}>{'<'}</button>
      <span> {page} </span>
      <button onClick={()=>{
        setPage(page+1);
      }}>{'>'}</button>
    </StyledDiv>
  )
}
