import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
position : relative;
display : flex;
height : 100px;
align-items : center;
border-bottom : 1px rgba(255,255,255,0.3) solid;
font-family : 'Colfax';
&:hover {
    background-color : #0a0e14;
}
`

export default function PlayinGroup_Article({teams}) {
    const src=process.env.PUBLIC_URL + '/images/teams/'+teams.name[0]+'.jpg';
  return (
    <StyledLink to={'/championship/'+ teams.name[0] }>
        <p style={{position:'absolute', height:'50%',left:'1%' ,fontSize:'50px', fontWeight:'bolder', color:'white'}}>{teams.playin[2]}</p>
        <img src={src} style={{position:'absolute', left:'15%',width:'60px', height:'60px',  marginRight : '20px', }}></img>
        <div style={{position:'absolute', left:'35%'}}>
            <p style={{margin:'0', color:'white', fontSize:'20px'}}>{teams.name[1]}</p>
            <p style={{margin:'0', color:'rgba(255,255,255,0.6)'}}>{teams.playin[1]}</p>
        </div>
    </StyledLink>
  )
}
