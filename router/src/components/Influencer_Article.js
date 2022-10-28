import React from 'react'
import { useParams } from 'react-router-dom';
import bts from './image/bts.jpg'
import son from './image/son.jpg'
import blackpink from './image/blackpink.jpg'
import faker from './image/faker.jpg'

export default function Influencer_Article() {
    const name = useParams().influencers;
    let body = null;
    if(name=="bts") {
        body = <div><p>2013년 6월 13일에 데뷔한 대한민국의 7인조 보이그룹이다.</p>
        <img src={bts} className='Article_img'></img></div>;
    }
    else if(name=="son") {
        body = <div><p>대한민국 국적의 토트넘 홋스퍼 FC 소속 축구선수. 주 포지션은 윙어이며, 현재 대한민국 축구 국가대표팀 주장을 맡고 있다.</p>
        <img src={son} className='Article_img'></img>
        </div>
    }
    else if(name=="blackpink") {
        body = <div><p>2016년 8월 8일에 데뷔한 YG엔터테인먼트 소속의 4인조 다국적 걸그룹이다.</p>
        <img src={blackpink} className='Article_img'></img>
        </div>
    }
    else if(name=="faker") {
        body = <div><p>대한민국의 리그 오브 레전드 프로게이머. 現 LCK의 T1 소속 주장이자 미드 라이너 및 파트 오너.
        </p>
        <img src={faker} className='Article_img'></img>
        </div>
    }
  return (
    <div>
        <h1>{name}</h1>
        {body}
    </div>
  )
}
