import React from 'react'
import Participants_Article from '../components/Participants_Article';


export default function Participants() {
    const Participant = {
        lck:["GEN", "T1", "DK", "DRX"],
        lpl:["JDG", "TES", "EDG", "RNG"],
        lec:["RGE", "G2", "FNC", "MAD"],
        lcs:["C9", "100", "EG"],
        pcs:["CFO", "BYG"],
        vsc:["GAM" ,"SGB"],
        ljl:["DFM"],
        lco:["CHF"],
        tcl:["IW"],
        lla:["ISG"],
        cblol:["lll"],
    };
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
      content.push(<Participants_Article league={temp[i]}></Participants_Article>)
    }
  return (
    <div>
      {content}
    </div>
  )
}
