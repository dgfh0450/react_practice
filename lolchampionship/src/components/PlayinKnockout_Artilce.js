import React from 'react'
import { NavLink } from 'react-router-dom';

export default function PlayinKnockout_Artilce({teams, round}) {
    const src = process.env.PUBLIC_URL + '/images/teams/'+teams.name[0]+'.jpg';
    const style ={
        display:'flex',
        position:'relative',
        borderLeft:'3px #c59c58 solid',
        borderBottom:'1px rgba(255,255,255,0.3) solid',
        color:'#c59c58',
        fontFamily:'ColfaxL',
        textDecoration:'none',
        padding:'5px',
        backgroundColor:'black'
    }
    let knockout = null;
    if(round=="1") knockout=teams.playin_knockout_1;
    else knockout=teams.playin_knockout_2;
    if(round=="1"&&knockout!="3"){
      style.opacity='0.3';
      style.color='white';
      style.borderLeft='3px rgba(255,255,255,1) solid';
    }
    if(round=="2"&&knockout!="3"){
      style.opacity='0.3';
      style.color='white';
      style.borderLeft='3px rgba(255,255,255,1) solid';
    }
  return (
    <NavLink to={'/championship/'+ teams.name[0]} style={style}>
        <div style={{display:'flex', width:'20%', justifyContent:'center'}}>
            <img style={{height:'50px'}} src={src}></img>
        </div>
        <p style={{ color:'white'}}>{teams.name[1]}</p>
        <p style={{ position:'absolute', right:'10%', fontWeight:'bolder'}}>{knockout}</p>
    </NavLink>
  )
}
