import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div `
display:flex;
justify-content:space-between;`

export default function Form(props) {
  return (
    <StyledDiv>
      <form style={{float:'left'}} onSubmit={(event)=>{
        event.preventDefault();
        props.onChangeQ(event.target.keyword.value);
        }}>
        <input name="keyword" type="text" placeholder='키워드'></input>
        <input name="date_from" type="date" id="from"></input>
        <input name="date_to" type="date" id="to"></input>
        <button type="submit">불러오기</button>
      </form>
      <nav>
      <button style={{float:'right'}} onClick={()=>{props.onChangeSort("publishedAt")}}>최신순</button>
      <button style={{float:'right'}} onClick={()=>{props.onChangeSort("popularity")}}>인기순</button>
      <button style={{float:'right'}} onClick={()=>{props.onChangeSort("relevancy")}}>연관순</button>
      </nav>
    </StyledDiv>
  )
}
