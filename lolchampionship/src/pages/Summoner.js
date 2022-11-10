import React, {useState, useEffect }from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Match from '../components/Match';

export default function Summoner() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [puuid, setPuuid] = useState(null);
    const {name} = useParams();
    const fetchData = async () => {
        try{
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name+'?api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
            setData(response.data);
        }
        catch(e) {
            setError(e);
        }
        setLoading(false);
    }
    useEffect(()=>{
      fetchData();
  }, [])

  if(loading) return <div>loading...</div>
  if(error) return <div>error...summoner</div>
  if(!data) return null;
  let _puuid = data.puuid;
  return (
    <div>
      <h1 style={{color:'white'}}>{name}</h1>
      <Match puuid={_puuid}></Match>
    </div>
  )
}
