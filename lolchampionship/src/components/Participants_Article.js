import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const StyledDiv= styled.div`
  width:100%;
  height:150px;
  border:3px black solid;
  border-radius : 10px;
  margin : 10px auto;
  position : relative;
  `


export default function Participants_Article({league}) {
    let lis = [];
    let src = process.env.PUBLIC_URL+'/images/leagues'+league[0]+'.jpg';
  for(let i=1; i<league.length; i++) {
    lis.push(<li style={{float:'left', marginRight:'30px', fontFamily:'RIXGOL'}}><Link style={{color:'black', textDecoration:'none'}} to={'/championship/'+ league[i] }>{league[i]}</Link></li>)
  }

  return (
    <StyledDiv>
      <div style={{width:'60%', height:'100%', position:'absolute', left:'0%', top:'0%', display:'flex', justifyContent:'center', alignItems:'center', borderRight:'3px black solid'}}><img style={{height:'80%'}} src={src}></img></div>
      <div style={{width:'40%', height:'100%', position:'absolute', left:'60%', top:'0%', display:'flex', justifyContent:'left', alignItems:'center' }}><ol>{lis}</ol></div>
    </StyledDiv>
  )
}
