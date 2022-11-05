import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const StyledDiv= styled.div`
  width : 100%;
  height : 150px;
  position : relative;
  padding : 10px 0;
  border-bottom:1px rgba(255,255,255,0.3) solid;
  `
  const LastDiv= styled.div`
  width : 100%;
  height : 150px;
  position : relative;
  padding : 10px 0;
  `

export default function Participants_Article({league}) {
    let lis = [];
    const src = process.env.PUBLIC_URL+'/images/leagues/'+league[0]+'.png'
    console.log(league[0]);
  for(let i=1; i<league.length; i++) {
    lis.push(<li style={{float:'left', marginRight:'30px', fontFamily:'RIXGOL', color:'white'}}><Link style={{color:'white', textDecoration:'none'}} to={'/championship/'+ league[i] }>{league[i]}</Link></li>)
  }
  if(league[0]=="CBLOL") return (
  <LastDiv>
      <div style={{width:'60%', height:'100%', position:'absolute', left:'0%', top:'0%', display:'flex', justifyContent:'center', alignItems:'center'}}><img style={{height:'120px'}} src={src}></img></div>
      <div style={{width:'40%', height:'100%', position:'absolute', left:'60%', top:'0%', display:'flex', justifyContent:'left', alignItems:'center'}}><ol style={{marginLeft:'20px'}}>{lis}</ol></div>
    </LastDiv>
  )
  else return (
    <StyledDiv>
      <div style={{width:'60%', height:'100%', position:'absolute', left:'0%', top:'0%', display:'flex', justifyContent:'center', alignItems:'center'}}><img style={{height:'120px'}} src={src}></img></div>
      <div style={{width:'40%', height:'100%', position:'absolute', left:'60%', top:'0%', display:'flex', justifyContent:'left', alignItems:'center'}}><ol style={{marginLeft:'20px'}}>{lis}</ol></div>
    </StyledDiv>
  )
}
