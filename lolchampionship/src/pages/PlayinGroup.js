import React from 'react'
import Participant from '../data'


export default function PlayinGroup() {
  return (
    <div style={{border:'1px white solid'}}>{Participant.leagues[0].name}</div>
  )
}
