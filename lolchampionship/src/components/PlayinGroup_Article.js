import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
position : relative;
display : flex;
height : 100px;
align-items : center;
font-family : 'ColfaxL';
&:before {
  content:"";
  width:100%;
  height:100%;
  box-sizing:border-box;
  border-top:1px rgba(255,255,255,0.3) solid;
  border-bottom:1px rgba(255,255,255,0.3) solid;
  transition : 0.1s;
}
&:hover:before {
  transform : scaleX(1.1);
  background-color : #0a0e14;
}
`

export default function PlayinGroup_Article({teams}) {
    const src=process.env.PUBLIC_URL + '/images/teams/'+teams.name[0]+'.jpg';
  return (
    <StyledLink to={'/championship/'+ teams.name[0] }>
        <p style={{position:'absolute', height:'50%',left:'1%' ,fontSize:'50px', fontWeight:'', color:'white'}}>{teams.playin[1]}</p>
        <div style={{position:'absolute', left:'10%' ,width:'20%', height:'100%', display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={src} style={{height:'60px'}}></img>
        </div>
        <div style={{position:'absolute', left:'35%'}}>
            <p style={{margin:'0', color:'white', fontSize:'20px'}}>{teams.name[1]}</p>
            <p style={{margin:'0', color:'rgba(255,255,255,0.6)', fontFamily:'ColfaxB'}}>{teams.playin[2]}</p>
        </div>
    </StyledLink>
  )
}
