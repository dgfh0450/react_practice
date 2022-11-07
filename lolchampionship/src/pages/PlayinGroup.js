import React from 'react'
import PlayinGroup_Article from '../components/PlayinGroup_Article';
import data from '../data.json'


export default function PlayinGroup({style}) {
  let contentA = [];
  contentA.push(<div style={{height:'50px' ,borderBottom : '1px rgba(255,255,255,0.3) solid', color:'white', fontSize:'25px'}}>A조</div>)
  let contentB = [];
  contentB.push(<div style={{height:'50px' ,borderBottom : '1px rgba(255,255,255,0.3) solid', color:'white', fontSize:'25px'}}>B조</div>)
  for(let a_rank=1, b_rank=1; a_rank<7 || b_rank<7; ){
    for(let i=0; i<data.leagues.length; i++) {
      for(let j=0; j<data.leagues[i].teams.length; j++) {
        if(data.leagues[i].teams[j].playin) {
          if(data.leagues[i].teams[j].playin[1]==a_rank && data.leagues[i].teams[j].playin[0]=="A") {
            contentA.push(<PlayinGroup_Article teams={data.leagues[i].teams[j]}></PlayinGroup_Article>);
            a_rank++;
          }
          else if(data.leagues[i].teams[j].playin[1]==b_rank && data.leagues[i].teams[j].playin[0]=="B") {
            contentB.push(<PlayinGroup_Article teams={data.leagues[i].teams[j]}></PlayinGroup_Article>);
            b_rank++;
          }
        }
      }
    }
  }
  return (
    <>
      <h1 style={{width:'100%', textAlign:'center', fontFamily:'RIXGOL', color:'white',}}>플레이-인 그룹 스테이지</h1>
      <div style={style}>
        <div style={{width:'50%', margin:'30px'}}>{contentA}</div>
        <div style={{width:'50%', margin:'30px'}}>{contentB}</div>
      </div>
    </>
  )
}
