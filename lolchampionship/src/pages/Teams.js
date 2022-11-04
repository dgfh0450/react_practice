import React from 'react'
import { useParams } from 'react-router-dom'
import top from '../images/top.jpg'
import mid from '../images/mid.jpg'
import jug from '../images/jg.jpg'
import adc from '../images/adc.jpg'
import spt from '../images/spt.jpg'

export default function Teams() {
    let teamName= useParams();
    const teamData ={
        GEN:[["Doran", "top"], ["Peanut", "jug"], ["Chovy", "mid"], ["Ruler", "adc"], ["Lehends", "spt"]],
        T1:[["Zeus", "top"],[ "Oner", "jug"], ["Faker", "mid"],[ "Gumayusi", "adc"],[ "Keria", "spt"]],
        DK:[["Nuguri", "top"], ["Burdol", "top"],[ "Canyon", "jug"], ["Showmaker", "mid"], ["Deokdam", "adc"],[ "Kellin", "spt"]],
        DRX:[["Kingen", "top"],[ "Pyosik", "jug"], ["Juhan", "jug"],["Zeka", "mid"],[ "Deft", "adc"], ["Beryl", "spt"]],
    }
    let lis = [];
    const arr = Object.entries(teamData);
    for(let i=0; i<arr.length; i++) {
        if(teamName.teams==arr[i][0])
        {
            let img = null;
            for(let j=0; j<arr[i][1].length; j++) {
                if(arr[i][1][j][1]=="top")  {img = top}
                else if(arr[i][1][j][1]=="jug") {img = jug}
                else if(arr[i][1][j][1]=="mid") {img = mid}
                else if(arr[i][1][j][1]=="adc") {img = adc}
                else if(arr[i][1][j][1]=="spt") {img = spt}

                lis.push(<li style={{ fontFamily:'RIXGOL', display:'flex', alignItems:'center'}}><img style={{width:'30px', height:'30px'}} src={img}></img> - {arr[i][1][j][0]}</li>)
            }
            return(
                <div>
                    <h1 style={{fontFamily:'RIXGOB'}}>{arr[i][0]}</h1>
                    <ul>{lis}</ul>
                </div>
            )
        }

    }
}
