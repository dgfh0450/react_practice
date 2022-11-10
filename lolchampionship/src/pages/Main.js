import React from 'react'
import SummonerSpell from '../data/ko_KR/summoner.json'


export default function main() {
  console.log(SummonerSpell.data);
  const array = Object.entries(SummonerSpell.data);
  for(let i=0; i<array.length; i++){
    console.log(array[i][1].key);
  }
  return (
    <div style={{color:'white'}}>main</div>
  )
}
