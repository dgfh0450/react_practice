import React, {useState, useEffect }from 'react'
import axios from 'axios'
import MatchData from './MatchData';

export default function Match(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        try{
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+props.puuid+'/ids?start=0&count=20&api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
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
  let content = [];
  for(let i in data) {
    content.push(<MatchData id={data[i]}></MatchData>)
  }
  if(loading) return <div>loading...</div>
  if(error) return <div>error... match</div>
  return (
    <div style={{color:'white'}}>
        {content}
    </div>
  )
}
