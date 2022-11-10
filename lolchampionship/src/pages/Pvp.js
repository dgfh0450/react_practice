import React, {useState} from 'react'
import Summoner from './Summoner'
import Form from '../components/Form';

export default function Pvp() {
  const [sum, setSum] = useState(null);
  return (
    <div>
      <p></p>
      <Form changeTarget={(target)=>{
        setSum(target);
      }}></Form>
      <Summoner name={sum}></Summoner>
    </div>
  )
}
