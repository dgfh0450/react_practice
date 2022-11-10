import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
  const navigate = useNavigate();
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      props.changeTarget(event.target.name.value);
      navigate(`/pvp/`+event.target.name.value);
    }}>
        <input type="text" name="name" placeholder="소환사 이름"></input>
        <button type='submit'>검색</button>
    </form>
  )
}
