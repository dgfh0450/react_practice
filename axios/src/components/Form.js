import React from 'react'

export default function Form(props) {
  return (
    <>
      <form onSubmit={(event)=>{
        event.preventDefault();
        props.onChangeQ(event.target.keyword.value);
        }}>
        <input name="keyword" type="text" placeholder='키워드'></input>
        <input name="date_from" type="date" id="from"></input>
        <input name="date_to" type="date" id="to"></input>
        <button type="submit">불러오기</button>
      </form>
      <button onClick={()=>{props.onChangeSort("publishedAt")}}>최신순</button>
      <button onClick={()=>{props.onChangeSort("popularity")}}>인기순</button>
      <button onClick={()=>{props.onChangeSort("relevancy")}}>연관순</button>
    </>
  )
}
