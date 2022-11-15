import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Rank from './Rank';
import gameMode from '../data/ko_KR/gameMode.json'

export default function User_Rank(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' +props.id+'?api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
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
    useEffect(() => {
        fetchData();
    }, [])

    if (loading) return <div>loading...</div>
    if (error) return <div>error...user</div>
    if (!data) return null;
    let rankData ={};
    for (let rank of data) {
       if(rank.queueType.includes("SOLO")) rankData.solo=rank;
       if(rank.queueType.includes("FLEX")) rankData.flex=rank;
    }
    return (
        <div>

            <div style={{ backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', fontSize: '20px', padding: '10px' }}>솔로 랭크</div>
            <div name="solo"><Rank data={rankData.solo}></Rank></div>

            <div style={{ backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', fontSize: '20px', padding: '10px' }}>자유 랭크</div>
            <div name="flex"><Rank data={rankData.flex}></Rank></div>
        </div>
    )
}
