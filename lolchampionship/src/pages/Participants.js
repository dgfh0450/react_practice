import React from 'react'
import Participants_Article from '../components/Participants_Article';
import data from '../data.json'

export default function Participants() {
    
    const temp = [
      ["LCK","GEN", "T1", "DK", "DRX"],
      ["LPL", "JDG", "TES", "EDG", "RNG"],
      ["LEC", "RGE", "G2", "FNC", "MAD"],
      ["LCS","C9", "100", "EG"],
      ["PCS", "CFO", "BYG"],
      ["VCS","GAM" ,"SGB"],
      ["LJL","DFM"],
      ["LCO","CHF"],
      ["TCL", "IW"],
      ["LLA","ISG"],
      ["CBLOL", "LLL"],
    
    ];
    let content=[];
    for(let i=0; i<temp.length; i++){
      console.log(data.leagues[i]);
      content.push(<Participants_Article league={data.leagues[i]}></Participants_Article>)
    }
  return (
    <div>
      {content}
    </div>
  )
}
