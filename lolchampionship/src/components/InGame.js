import React, { useState } from 'react'
import gameMode from '../data/ko_KR/gameMode.json'
import champion from '../data/ko_KR/championFull.json'
import Rune from '../data/ko_KR/runesReforged.json'
import { Link } from 'react-router-dom';

export default function InGame(props) {
  console.log(props.data.participants);
  const data = props.data;
  let team100 = [];
  let team200 = [];
  const championArray = Object.entries(champion.keys);
  for (let i = 0; i < 10; i++) {
    let src_champ = null;
    let src_main_rune = null;
    for (let j = 0; j < Rune.length; j++) {
      if (Rune[j].id == data.participants[i].perks.perkStyle) {
        for (let k = 0; k < Rune[j].slots[0].runes.length; k++) {
          if (data.participants[i].perks.perkIds[0] == Rune[j].slots[0].runes[k].id) {
            src_main_rune = process.env.PUBLIC_URL + '/images/' + Rune[j].slots[0].runes[k].icon;
          }
        }
      }
    }
    let src_sub_rune = null;
    for (let j = 0; j < Rune.length; j++) {
      if (Rune[j].id == data.participants[i].perks.perkSubStyle) {
        src_sub_rune = process.env.PUBLIC_URL + '/images/' + Rune[j].icon;
        break;
      }
    }
    for (let j = 0; j < championArray.length; j++) {
      if (data.participants[i].championId == championArray[j][0]) {
        src_champ = process.env.PUBLIC_URL + '/images/champion/' + championArray[j][1] + '.png';
      }
    }
    if (data.participants[i].teamId == "100") {
      team100.push(
        <div style={{ display: 'flex' }}>
          <img src={src_champ} style={{ width: '50px', height:'50px' }}></img>
          <div style={{width:'25px'}}>
            <img src={src_main_rune} style={{ width: '25px', height: '25px', margin:'0' }}></img>
            <img src={src_sub_rune} style={{ width: '25px', height: '25px', margin:'0'}}></img>
          </div>
          <Link to={'/pvp/'+data.participants[i].summonerName} target="_blank">{data.participants[i].summonerName}</Link>
        </div>)
    }
    else {
      team200.push(
        <div style={{ display: 'flex' }}>
          <img src={src_champ} style={{ width: '50px', height:'50px' }}></img>
          <div style={{width:'25px'}}>
            <img src={src_main_rune} style={{ width: '25px', height: '25px', margin:'0' }}></img>
            <img src={src_sub_rune} style={{ width: '25px', height: '25px', margin:'0'}}></img>
          </div>
          <Link to={'/pvp/'+data.participants[i].summonerName} target="_blank">{data.participants[i].summonerName}</Link>
        </div>)
    }
  }
  return (
    <div style={{ backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', padding: '10px' }}>
      <div>{data.gameMode}</div>
      <div style={{ border: '1px white solid' }}>{team100}</div>
      <div style={{ border: '1px white solid' }}>{team200}</div>
    </div>
  )
}
