import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import data from '../data.json'

const StyledDiv= styled.div`
  width : 100%;
  height : 150px;
  position : relative;
  padding : 10px 0;
  border-bottom:1px rgba(255,255,255,0.3) solid;
  `
const JustifyDiv = styled.div`
  display:flex;
  width:50%;
  flex-flow:column wrap;
  border:1px white solid;
  text-align: justify;
  text-justify : inter-word;
  &:after{
    content:"";
    width:100%;
    
  }
`

export default function Participants_Article({league}) {
    let lis = [];
    const src = process.env.PUBLIC_URL+'/images/leagues/'+league.name+'.png';
  for(let i=0; i<league.teams.length; i++) {
    lis.push(<li style={{float:'left', marginRight:'30px', fontFamily:'RIXGOL', color:'white'}}><Link style={{color:'white', textDecoration:'none'}} to={'/championship/'+ league.teams[i].name[0] }>{league.teams[i].name[0]}</Link></li>)
  }
  return (
    <StyledDiv>
      <div style={{width:'60%', height:'100%', position:'absolute',left:'0%', top:'0%', display:'flex', flexFlow:'row wrap', alignItems:'center',justifyContent:'center', position:'relative'}}>
        <img style={{height:'120px'}} src={src}></img>
      </div>
      <div style={{width:'40%', height:'100%', position:'absolute', left:'60%', top:'0%', display:'flex', justifyContent:'left', alignItems:'center'}}><ol style={{marginLeft:'20px'}}>{lis}</ol></div>
    </StyledDiv>
  )
}
