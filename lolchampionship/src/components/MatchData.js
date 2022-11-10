import React, {useState, useEffect }from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rune from '../data/ko_KR/runesReforged.json';

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

  let team100 = [];
  let team200 = [];
  for(let i=0; i<10; i++) {
    const src_champ = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/champion/'+data.info.participants[i].championName+'.png';
    const src_item0 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item0+'.png';
    const src_item1 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item1+'.png';
    const src_item2 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item2+'.png';
    const src_item3 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item3+'.png';
    const src_item4 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item4+'.png';
    const src_item5 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item5+'.png';
    const src_item6 = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/12.21.1/img/item/'+data.info.participants[i].item6+'.png';
    let src_main_rune = null;
    for(let j=0; j<Rune.length; j++) {
        if(Rune[j].id==data.info.participants[i].perks.styles[0].style) {
            for(let k=0; k<Rune[j].slots[0].runes.length; k++) {
                if(Rune[j].slots[0].runes[k].id==data.info.participants[i].perks.styles[0].selections[0].perk) {
                    src_main_rune = process.env.PUBLIC_URL + '/images/dragontail-12.21.1/img/'+Rune[j].slots[0].runes[k].icon;
                }
            }
        }
    }
    let src_sub_rune = null;
    for(let j=0; j<Rune.length; j++) {
        if(Rune[j].id==data.info.participants[i].perks.styles[1].style) {
            src_sub_rune = process.env.PUBLIC_URL+'/images/dragontail-12.21.1/img/'+Rune[j].icon;
        }
    }
    if(data.info.participants[i].teamId=="100"){
        if(data.info.teams[0].win) {
            team100.push(<div style={{width:'100%', height:'50px', display:'flex', alignItems:'center', backgroundColor:'rgb(255,240,243)'}}>
            <Link target="_blank" to={'/pvp/'+data.info.participants[i].summonerName} style={{width:'10%',height:'20px', lineHeight:'20px',color:'black', textDecoration:'none', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{data.info.participants[i].summonerName}</Link>
            <div style={{width:'40px', height:'40px', position:'relative'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'15px', height:'15px', borderRadius:'50%', position:'absolute', left:'0%', bottom:'0%', color:'white', fontSize:'8px',backgroundColor:'black'}}>{data.info.participants[i].champLevel}</div>
                <img src={src_champ} style={{width:'40px', borderRadius:'50%'}}></img>
            </div>
            <div style={{display:'flex', flexFlow:'column wrap'}}>
                <img style={{width:'20px', height:'20px'}} src={src_main_rune}></img>
                <img style={{width:'20px', height:'20px'}} src={src_sub_rune}></img>
            </div>
            <div style={{width:'7%', textAlign:'center',color:'black'}}>{data.info.participants[i].kills}/{data.info.participants[i].deaths}/{data.info.participants[i].assists}</div>
            <div style={{display:'flex'}}>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item0}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item1}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item2}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item3}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item4}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item5}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item6}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
            </div>
        </div>) }
        else {
            team100.push(<div style={{width:'100%', height:'50px', display:'flex', alignItems:'center',backgroundColor:'rgb(236,242,255)'}}>
            <Link target="_blank" to={'/pvp/'+data.info.participants[i].summonerName} style={{width:'10%',height:'20px', lineHeight:'20px',color:'black', textDecoration:'none', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{data.info.participants[i].summonerName}</Link>
            <div style={{width:'40px', height:'40px', position:'relative'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'15px', height:'15px', borderRadius:'50%', position:'absolute', left:'0%', bottom:'0%', color:'white', fontSize:'8px',backgroundColor:'black'}}>{data.info.participants[i].champLevel}</div>
                <img src={src_champ} style={{width:'40px', borderRadius:'50%'}}></img>
            </div>
            <div style={{display:'flex', flexFlow:'column wrap'}}>
                <img style={{width:'20px', height:'20px'}} src={src_main_rune}></img>
                <img style={{width:'20px', height:'20px'}} src={src_sub_rune}></img>
            </div>
            <div style={{width:'7%', textAlign:'center',color:'black'}}>{data.info.participants[i].kills}/{data.info.participants[i].deaths}/{data.info.participants[i].assists}</div>
            <div style={{display:'flex'}}>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item0}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item1}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item2}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item3}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item4}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item5}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item6}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
            </div>
        </div>) }
    }
    else if(data.info.participants[i].teamId=="200"){
        if(data.info.teams[1].win) {
            team200.push(<div style={{width:'100%', height:'50px', display:'flex', alignItems:'center', backgroundColor:'rgb(255,240,243)'}}>
            <Link target="_blank" to={'/pvp/'+data.info.participants[i].summonerName} style={{width:'10%',height:'20px', lineHeight:'20px',color:'black', textDecoration:'none', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{data.info.participants[i].summonerName}</Link>
            <div style={{width:'40px', height:'40px', position:'relative'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'15px', height:'15px', borderRadius:'50%', position:'absolute', left:'0%', bottom:'0%', color:'white', fontSize:'8px',backgroundColor:'black'}}>{data.info.participants[i].champLevel}</div>
                <img src={src_champ} style={{width:'40px', borderRadius:'50%'}}></img>
            </div>
            <div style={{display:'flex', flexFlow:'column wrap'}}>
                <img style={{width:'20px', height:'20px'}} src={src_main_rune}></img>
                <img style={{width:'20px', height:'20px'}} src={src_sub_rune}></img>
            </div>
            <div style={{width:'7%', textAlign:'center',color:'black'}}>{data.info.participants[i].kills}/{data.info.participants[i].deaths}/{data.info.participants[i].assists}</div>
            <div style={{display:'flex'}}>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item0}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item1}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item2}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item3}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item4}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item5}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(255,186,195)',backgroundImage:`url(${src_item6}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
            </div>
        </div>) }
        else {
            team200.push(<div style={{width:'100%', height:'50px', display:'flex', alignItems:'center',backgroundColor:'rgb(236,242,255)'}}>
            <Link target="_blank" to={'/pvp/'+data.info.participants[i].summonerName} style={{width:'10%',height:'20px', lineHeight:'20px',color:'black', textDecoration:'none', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>{data.info.participants[i].summonerName}</Link>
            <div style={{width:'40px', height:'40px', position:'relative'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'15px', height:'15px', borderRadius:'50%', position:'absolute', left:'0%', bottom:'0%', color:'white', fontSize:'8px',backgroundColor:'black'}}>{data.info.participants[i].champLevel}</div>
                <img src={src_champ} style={{width:'40px', borderRadius:'50%'}}></img>
            </div>
            <div style={{display:'flex', flexFlow:'column wrap'}}>
                <img style={{width:'20px', height:'20px'}} src={src_main_rune}></img>
                <img style={{width:'20px', height:'20px'}} src={src_sub_rune}></img>
            </div>
            <div style={{width:'7%', textAlign:'center',color:'black'}}>{data.info.participants[i].kills}/{data.info.participants[i].deaths}/{data.info.participants[i].assists}</div>
            <div style={{display:'flex'}}>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item0}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item1}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item2}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item3}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item4}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item5}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}></div>
                <div style={{width:'30px', height:'30px', marginRight:'1px',borderRadius:'8px', backgroundColor:'rgb(179,205,255)',backgroundImage:`url(${src_item6}), url('')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}></div>
            </div>
        </div>) }
    }
  }
    return (
    <StyledDiv>
        <p>{data.info.gameMode}</p>
        <div style={{width:'100%', marginBottom:'30px'}}>{team100}</div>
        <div>{team200}</div>
    </StyledDiv>
  )
  
}
