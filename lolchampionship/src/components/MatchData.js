import React, {useState, useEffect }from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rune from '../data/ko_KR/runesReforged.json';
import SummonerSpell from '../data/ko_KR/summoner.json'

const StyledDiv = styled.div`
    width:100%;
    border:1px rgba(255,255,255,0.3) solid;
    padding:10px
`

export default function MatchData(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        try{
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/'+props.id+'?api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
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
    if(error) return <div>error... matchdata</div>
    if(!data) return null;
    let index = null;
    for(let i=0; i<10; i++) {
        if(data.info.participants[i].puuid==props.puuid) {
            index=i;
            break;
        }
      }
    const src_champ = process.env.PUBLIC_URL + '/images/champion/'+data.info.participants[index].championName+'.png';
    const src_item0 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item0+'.png';
    const src_item1 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item1+'.png';
    const src_item2 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item2+'.png';
    const src_item3 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item3+'.png';
    const src_item4 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item4+'.png';
    const src_item5 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item5+'.png';
    const src_item6 = process.env.PUBLIC_URL + '/images/item/'+data.info.participants[index].item6+'.png';
    return (
        <div style={{width:'100%', padding:'20px',color:'white', border:'1px white solid'}}>
            <img src={src_champ} style={{width:'50px', height:'50px', borderRadius:'50%'}}></img>
        </div>
  )
  
}
