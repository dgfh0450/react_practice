import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

export default function Teams() {
    let teamName= useParams();
    
    let lis = [];
    for (let i=0; i<data.leagues.length; i++) {
        for (let j=0; j<data.leagues[i].teams.length; j++) {
            if(teamName.teams==data.leagues[i].teams[j].name[0]) {
                const src_teams = process.env.PUBLIC_URL+'/images/teams/'+data.leagues[i].teams[j].name[0]+'.jpg';
                for(let k=0; k<data.leagues[i].teams[j].member.length; k++)
                {
                    const src_lane = process.env.PUBLIC_URL+'/images/lane/'+data.leagues[i].teams[j].member[k][1]+'.jpg';
                    lis.push(<li style={{ fontFamily:'RIXGOL', display:'flex', alignItems:'center', marginBottom:'10px', color:'white'}}><img src={src_lane} style={{width:'30px', height:'30px', marginRight:'10px'}} ></img>{data.leagues[i].teams[j].member[k][0]}</li>)
                }
                return(
                    <div style={{display:'flex', padding:'20px'}}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'50%', borderRight:'1px rgba(255,255,255,0.3) solid'}}><img src={src_teams} style={{height:'200px'}}></img></div>
                        <div style={{width:'50%', display:'flex', alignItems:'center'}}><ul>{lis}</ul></div>
                    </div>
                )
            }
        }
    }
}
