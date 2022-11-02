import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div `
display:flex;
justify-content:space-between;`

const StyledBtn = styled.button `
  margin-right : 5px;
  border : none;
  background-color : #fff;
  float : right;
  cursor : pointer;
  &:hover {
    box-shadow : 0 0 8px rgba(0,0,0,0.6);
    transform : scale(1.1);
    font-weight : bold;
  }
`

export default function Form(props) {
  const t_max = new Date().toISOString().split("T")[0];
  const t_min = '2022-09-01';
  return (
    <StyledDiv>
      <form style={{float:'left'}} onSubmit={(event)=>{
        event.preventDefault();
        props.onChangeQ(event.target.keyword.value);
        props.onChangeDate_from(event.target.from.value);
        props.onChangeDate_to(event.target.to.value);
        }}>
        <input name="keyword" type="text" placeholder='키워드'></input>
        <input name="date_from" type="date" id="from" min={t_min} max={t_max}></input>
        <input name="date_to" type="date" id="to" min={t_min} max={t_max}></input>
        <button type="submit">불러오기</button>
      </form>
      <nav>
      <StyledBtn onClick={()=>{props.onChangeSort("publishedAt")}}>최신순</StyledBtn>
      <StyledBtn onClick={()=>{props.onChangeSort("popularity")}}>인기순</StyledBtn>
      <StyledBtn onClick={()=>{props.onChangeSort("relevancy")}}>연관순</StyledBtn>
      </nav>
    </StyledDiv>
  )
}
