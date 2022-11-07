import React from 'react'
import PlayinKnockout_Artilce from '../components/PlayinKnockout_Artilce';
import data from '../data.json'

export default function PlayinKnockout({style}) {
  let content1A = [];
  let content1B = [];
  let content2A = [];
  let content2B = [];
  for(let i=0; i<data.leagues.length; i++) {
    for(let j=0; j<data.leagues[i].teams.length; j++) {
      if(data.leagues[i].teams[j].playin) {
        if(data.leagues[i].teams[j].playin_knockout_1&& data.leagues[i].teams[j].playin[0]=="A") {
          content1A.push(<PlayinKnockout_Artilce teams={data.leagues[i].teams[j]} round="1"></PlayinKnockout_Artilce>)
        }
        else if(data.leagues[i].teams[j].playin_knockout_1&& data.leagues[i].teams[j].playin[0]=="B") {
          content1B.push(<PlayinKnockout_Artilce teams={data.leagues[i].teams[j]} round="1"></PlayinKnockout_Artilce>)
        }
      }
    }
  }
  for(let i=0; i<data.leagues.length; i++) {
    for(let j=0; j<data.leagues[i].teams.length; j++) {
      if(data.leagues[i].teams[j].playin) {
        if(data.leagues[i].teams[j].playin_knockout_2&& data.leagues[i].teams[j].playin[0]=="A") {
          content2A.push(<PlayinKnockout_Artilce teams={data.leagues[i].teams[j]} round="2"></PlayinKnockout_Artilce>)
        }
        else if(data.leagues[i].teams[j].playin_knockout_2&& data.leagues[i].teams[j].playin[0]=="B") {
          content2B.push(<PlayinKnockout_Artilce teams={data.leagues[i].teams[j]} round="2"></PlayinKnockout_Artilce>)
        }
      }
    }
  } 
  return (
    <>
    <h1 style={{width:'100%', textAlign:'center', fontFamily:'RIXGOL', color:'white'}}>플레이-인 토너먼트 스테이지</h1>
    <div style={style}>
      <div style={{width:'50%', margin:'30px'}}>
        <p style={{color:'white', fontFamily:'RIXGOB'}}>1라운드</p> 
        <div style={{marginBottom:'30px'}}>{content1A}</div>
        <div style={{marginBottom:'30px'}}>{content1B}</div>
      </div>
      <div style={{width:'50%', margin:'30px'}}>
        <p style={{color:'white', fontFamily:'RIXGOB'}}>2라운드</p>
        <div style={{marginBottom:'30px'}}>{content2A}</div>
        <div style={{marginBottom:'30px'}}>{content2B}</div>
      </div>
    </div>
    </>
  )
}
