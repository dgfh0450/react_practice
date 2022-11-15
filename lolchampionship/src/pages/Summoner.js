import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Match from '../components/Match';
import User_Rank from '../components/User_Rank';
import { Button } from '@mui/material'
import InGame from '../components/InGame';

export default function Summoner() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setisPlaying] = useState(false);
  const { name } = useParams();
  const [inGame, setinGame] = useState(null);
  const fetchData = async () => {
    try {
      setData(null);
      setError(null);
      setLoading(true);
      const response = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
      setData(response.data);
    }
    catch (error) {
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
  const inGameData = async () => {
    try {
      setinGame(null);
      const response = await axios.get('https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/' + data.id + '?api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
      setinGame(response.data);
      setisPlaying(true);
    }
    catch (error) {
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
    if (inGame) { console.log(inGame); console.log(isPlaying); }
    else console.log('not gaming');
  }
  useEffect(() => {
    fetchData();
  }, [])
  if (loading) return <div>loading...</div>
  if (error) return <div>error...summoner</div>
  if (!data) return null;
  const src_profile = process.env.PUBLIC_URL + '/images/profileicon/' + data.profileIconId + '.png';
  return (
    <>
      <div style={{ backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', display: 'flex', padding: '10px' }}>
        <div style={{ width: '150px', height: '150px', position: 'relative', borderRadius: '10px', backgroundImage: `url(${src_profile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '30px' }}>
          <div style={{ position: 'absolute', left: '50%', bottom: '0%', color: 'white', transform: 'translateX(-50%)', padding: '3px', backgroundColor: 'rgb(0,0,0)', borderRadius: '5px' }}>{data.summonerLevel}</div>
        </div>
        <div style={{ display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-between' }}>
          <div style={{ color: 'white', fontSize: '30px', fontWeight: 'bolder', margin: '10px 0px' }}>{data.name}</div>
          <div>
            <Button onClick={fetchData} variant="contained" sx={{ width: '100px', marginRight: '10px' }}>전적 갱신</Button>
            <Button onClick={inGameData} variant='contained' sx={{ width: "100px", marginRight: '10px' }}>인게임 정보</Button>
          </div>
        </div>
      </div>
      {isPlaying?<InGame data={inGame}></InGame>:null}
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%', color: 'white' }}>
          <User_Rank id={data.id}></User_Rank>
        </div>
        <div style={{ width: '60%',margin:'5' }}>
          <Match puuid={data.puuid}></Match>
        </div>
      </div>
    </>
  )
}
