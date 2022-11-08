import React from 'react'
import Knockout_Article from '../components/Knockout_Article';
import data from '../data.json'

export default function Knockout({style}) {
    let contentQA = [];
    let contentQB = [];
    let contentQC = [];
    let contentQD = [];
    let contentSA = [];
    let contentSB = [];
    let contentF = [];
    for(let i=0; i<data.leagues.length; i++) {
        for(let j=0; j<data.leagues[i].teams.length; j++) {
          if(data.leagues[i].teams[j].knockout_quater) {
            if(data.leagues[i].teams[j].knockout_quater[0]=="A") {
                contentQA.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="quater"></Knockout_Article>);
            }
            else if(data.leagues[i].teams[j].knockout_quater[0]=="B") {
                contentQB.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="quater"></Knockout_Article>);
            }
            else if(data.leagues[i].teams[j].knockout_quater[0]=="C") {
                contentQC.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="quater"></Knockout_Article>);
            }
            else if(data.leagues[i].teams[j].knockout_quater[0]=="D") {
                contentQD.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="quater"></Knockout_Article>);
            }
          }
          if(data.leagues[i].teams[j].knockout_semi) {
            if(data.leagues[i].teams[j].knockout_semi[0]=="A") {
                contentSA.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="semi"></Knockout_Article>);
            }
            else if(data.leagues[i].teams[j].knockout_semi[0]=="B") {
                contentSB.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="semi"></Knockout_Article>);
            }
          }
          if(data.leagues[i].teams[j].knockout_final) {
            contentF.push(<Knockout_Article teams={data.leagues[i].teams[j]} round="final"></Knockout_Article>);
          }
        }
      }
  return (
    <div style={style}>
        <div style={{width:'30%',}}>
            <p style={{ color:'white', fontFamily:'RIXGOB'}}>8강</p> 
            <div style={{display:'flex',flexFlow:'column wrap',justifyContent:'space-around'}}>
                <div style={{marginBottom:'50px'}}>{contentQA}</div>
                <div style={{marginBottom:'50px'}}>{contentQB}</div>
                <div style={{marginBottom:'50px'}}>{contentQC}</div>
                <div style={{marginBottom:'0'}}>{contentQD}</div>
            </div>
        </div>
        <div style={{width:'30%'}}>
            <p style={{ color:'white', fontFamily:'RIXGOB'}}>4강</p> 
            <div style={{ display:'flex',height:'560px', flexFlow:'column wrap',justifyContent:'space-around'}}>
                <div style={{marginBottom:'50px'}}>{contentSA}</div>
                <div style={{}}>{contentSB}</div>
            </div>
        </div>
        <div style={{width:'30%'}}>
            <p style={{color:'white',fontFamily:'RIXGOB'}}>결승</p> 
            <div style={{display:'flex',height:'560px',flexFlow:'column wrap',justifyContent:'space-around'}}>
                <div style={{}}>{contentF}</div>
            </div>
        </div>
    </div>
  )
}
