import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        props.onChangeQ(event.target.keyword.value);
        props.onChangeDate(event.target.date.value);
    }}>
        <input name="keyword" type="text" placeholder='키워드'></input>
        <input name="date" type="date" id="to"></input>
        <button type="submit">불러오기</button>
    </form>
  )
}
