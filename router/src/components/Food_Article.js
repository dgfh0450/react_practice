import React from 'react'
import { useParams } from 'react-router-dom'
import kimchi from './image/kimchi.jpg'

export default function Food_Article() {
    const name = useParams().foods;
    let body = null;
    if(name=="kimchi") {
        body = <div><p>김치에는 깍두기, 배추김치, 총각김치 등이 있습니다.</p>
        <img src={kimchi}></img></div>;
    }
    else if(name=="bulgogi"){
        body = <p>또 내가 젤 좋아하는 음식이지 개꿀맛</p>
    }
  return (
    <div>{name}<br></br>{body}</div>
  )
}
