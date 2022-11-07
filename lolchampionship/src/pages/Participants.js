import React from 'react'
import Participants_Article from '../components/Participants_Article';
import data from '../data.json'

export default function Participants() {
 
    let content=[];
    for(let i=0; i<data.leagues.length; i++){
      content.push(<Participants_Article league={data.leagues[i]}></Participants_Article>)
    }
  return (
    <div>
      {content}
    </div>
  )
}
