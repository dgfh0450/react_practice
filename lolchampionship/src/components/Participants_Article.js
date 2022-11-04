import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import lck from '../images/lck.jpg'
import lpl from '../images/lpl.jpg'
import lec from '../images/lec.jpg'
import lcs from '../images/lcs.jpg'
import vcs from '../images/vcs.jpg'
import pcs from '../images/pcs.jpg'
import ljl from '../images/ljl.jpg'
import lco from '../images/lco.jpg'
import tcl from '../images/tcl.jpg'
import lla from '../images/lla.jpg'
import cblol from '../images/cblol.jpg'
import { height } from '@mui/system';

const StyledDiv= styled.div`
  width:100%;
  height:150px;
  border:1px black solid;
  margin : 10px;
  position : relative;
  `


export default function Participants_Article({league}) {
    let lis = [];
    let src = null;
    if(league[0]=="LCK") {src=lck;}
    else if(league[0]=="LPL") {src=lpl;}
    else if(league[0]=="LEC") {src=lec;}
    else if(league[0]=="LCS") {src=lcs;}
    else if(league[0]=="VCS") {src=vcs;}
    else if(league[0]=="PCS") {src=pcs;}
    else if(league[0]=="LJL") {src=ljl;}
    else if(league[0]=="LCO") {src=lco;}
    else if(league[0]=="TCL") {src=tcl;}
    else if(league[0]=="LLA") {src=lla;}
    else if(league[0]=="CBLOL") {src=cblol;}
  for(let i=1; i<league.length; i++) {
    lis.push(<li style={{float:'left', marginRight:'30px', fontFamily:'RIXGOL'}}><Link style={{color:'black', textDecoration:'none'}} to={'/championship/'+ league[i] }>{league[i]}</Link></li>)
  }

  return (
    <StyledDiv>
      <div style={{width:'60%', height:'100%', position:'absolute', left:'0%', top:'0%', display:'flex', justifyContent:'center', alignItems:'center', borderRight:'1px black solid'}}><img style={{height:'80%'}} src={src}></img></div>
      <div style={{width:'40%', height:'100%', position:'absolute', left:'60%', top:'0%', display:'flex', justifyContent:'left', alignItems:'center' }}><ol>{lis}</ol></div>
    </StyledDiv>
  )
}
