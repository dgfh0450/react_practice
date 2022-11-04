import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledDiv= styled.div`
  width:100%;
  height:150px;
  border:1px black solid;
  margin : 10px;
  `


export default function Participants_Article({league}) {
    let lis = [];
  for(let i=1; i<league.length; i++) {
    lis.push(<li style={{float:'left', marginRight:'30px', fontFamily:'RIXGOL'}}><Link style={{color:'black', textDecoration:'none'}} to={'/championship/'+ league[i] }>{league[i]}</Link></li>)
  }

  return (
    <StyledDiv>
        <img src={'./images/'+0+'.jpg'}></img>
        <h1 style={{fontFamily:'RIXGOB'}}>{league[0]}</h1>
        <ol>{lis}</ol>
    </StyledDiv>
  )
}
