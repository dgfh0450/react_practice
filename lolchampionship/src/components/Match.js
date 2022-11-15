import React, {useState, useEffect }from 'react'
import axios from 'axios'
import MatchData from './MatchData';
import MatchData_Detail from './MatchData_Detail';

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
        catch(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        }
        setLoading(false);
    }
    useEffect(()=>{
      fetchData();
  }, [])
  let content = [];
  for(let i in data) {
    content.push(<MatchData id={data[i]} puuid={props.puuid}></MatchData>)
  }
  if(loading) return <div>loading...</div>
  if(error) return <div>error... match</div>
  return (
    <div style={{ display:'flex', justifyContent:'flex-end', flexFlow:'row wrap'}}>
        {content}
    </div>
  )
}
