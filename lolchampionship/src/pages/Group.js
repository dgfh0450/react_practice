import React from 'react'
import data from '../data.json'
import Group_Article from '../components/Group_Article';

export default function Group({style}) {
    style.flexFlow = 'row wrap';
  let contentA = [];
  contentA.push(<div style={{height:'50px' ,borderBottom : '1px rgba(255,255,255,0.3) solid', color:'white', fontSize:'25px'}}>A조</div>)
  let contentB = [];
  contentB.push(<div style={{height:'50px' ,borderBottom : '1px rgba(255,255,255,0.3) solid', color:'white', fontSize:'25px'}}>B조</div>)
  let contentC = [];
  contentC.push(<div style={{height:'50px' ,borderBottom : '1px rgba(255,255,255,0.3) solid', color:'white', fontSize:'25px'}}>C조</div>)
  let contentD = [];
  contentD.push(<div style={{height:'50px' ,borderBottom : '1px rgba(255,255,255,0.3) solid', color:'white', fontSize:'25px'}}>D조</div>)
  for(let a_rank=1, b_rank=1, c_rank=1, d_rank=1; a_rank<5 || b_rank<5 || c_rank<5 || d_rank<5; ){
    for(let i=0; i<data.leagues.length; i++) {
      for(let j=0; j<data.leagues[i].teams.length; j++) {
        if(data.leagues[i].teams[j].group) {
          if(data.leagues[i].teams[j].group[1]==a_rank && data.leagues[i].teams[j].group[0]=="A") {
            contentA.push(<Group_Article teams={data.leagues[i].teams[j]}></Group_Article>);
            a_rank++;
          }
          else if(data.leagues[i].teams[j].group[1]==b_rank && data.leagues[i].teams[j].group[0]=="B") {
            contentB.push(<Group_Article teams={data.leagues[i].teams[j]}></Group_Article>);
            b_rank++;
          }
          else if(data.leagues[i].teams[j].group[1]==c_rank && data.leagues[i].teams[j].group[0]=="C") {
            contentC.push(<Group_Article teams={data.leagues[i].teams[j]}></Group_Article>);
            c_rank++;
          }
          else if(data.leagues[i].teams[j].group[1]==d_rank && data.leagues[i].teams[j].group[0]=="D") {
            contentD.push(<Group_Article teams={data.leagues[i].teams[j]}></Group_Article>);
            d_rank++;
          }
        }
      }
    }
  }
  return (
    <>
      <h1 style={{width:'100%', textAlign:'center', fontFamily:'RIXGOL', color:'white',}}>플레이-인 그룹 스테이지</h1>
      <div style={style}>
        <div style={{width:'45%', margin:'10px'}}>{contentA}</div>
        <div style={{width:'45%', margin:'10px'}}>{contentB}</div>
        <div style={{width:'45%', margin:'10px'}}>{contentC}</div>
        <div style={{width:'45%', margin:'10px'}}>{contentD}</div>
      </div>
    </>
  )
}
