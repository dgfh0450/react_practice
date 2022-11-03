import React, { useState } from 'react'
import News_Article from './components/News_Article_headline'
import styled from 'styled-components'
import Nav from './components/Nav'
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import News_Article_headline from './components/News_Article_headline';
import News_Article_custom from './components/News_Article_custom';

export default function App() {

  const t_max = new Date().toISOString().split("T")[0];
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState("headline");
  const [q, setQ] = useState(null);
  const [date_from, setDate_from] = useState(null);
  const [date_to, setDate_to] = useState(t_max);
  const [sort, setSort] = useState("relevancy");
  const StyledNav = styled.nav`
    text-align : center;
    font-size : 20px;
    display : flex; 
    align-items : center;
    justify-content : center;
  `
  const StyledDiv =  styled.div`
    margin : 0px;
    padding : 10px;
  `

  const StyledBtn = styled.button`
    height : 25px;
    width : 25px;
    border:1px black solid;
    cursor : pointer;
    background-color : #fff;
    font-size:15px;
    `

  console.log(sort);
  let form = null;
  if(mode == "custom") {
    form = <Form onChangeQ={(_q)=>{setQ(_q)}} onChangeDate_from={(_from)=>{setDate_from(_from)}} onChangeDate_to={(_to)=>{setDate_to(_to)}} onChangeSort={(_sort)=>{setSort(_sort)}}></Form>
  }
  else form = null;
  return (
    <StyledDiv>
      
      <Nav onChangeMode={(mode)=>{setMode(mode); setPage(1);}}></Nav>
      {form}
      <br></br>
      <Routes>
        <Route path='/' element={<News_Article_headline page={page}></News_Article_headline>}></Route>
        <Route path='/headline' element={<News_Article_headline page={page}></News_Article_headline>}></Route>
        <Route path='/custom' element={<News_Article_custom page={page} q={q} sort={sort} date_from={date_from} date_to={date_to}></News_Article_custom>}></Route>
      </Routes>

      <StyledNav>
        <StyledBtn onClick={()=>{setPage(page-1);}}>{'<'}</StyledBtn>
        <span style={{height : '25px',width:'25px' , margin : '0 5px', lineHeight : '100%'}}>{page}</span>
        <StyledBtn onClick={()=>{setPage(page+1);}}>{'>'}</StyledBtn>
      </StyledNav>
    </StyledDiv>
  )
}
