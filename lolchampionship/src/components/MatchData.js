import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rune from '../data/ko_KR/runesReforged.json';
import SummonerSpell from '../data/ko_KR/summoner.json'
import MatchData_Detail from './MatchData_Detail';

export default function MatchData(props) {
    const [detail, setDetail] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const changeView = () => {
        setDetail(!detail);
    }

    const fetchData = async () => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/' + props.id + '?api_key=RGAPI-2cffc6cb-251a-446c-b803-e21414a70b1c');
            setData(response.data);
        }
        catch (e) {
            setError(e);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])

    if (loading) return <div>loading...</div>
    if (error) return <div>error... matchdata</div>
    if (!data) return null;
    let index = null;
    for (let i = 0; i < 10; i++) {
        if (data.info.participants[i].puuid == props.puuid) {
            index = i;
            break;
        }
    }
    const src_champ = process.env.PUBLIC_URL + '/images/champion/' + data.info.participants[index].championName + '.png';
    const src_item0 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item0 + '.png';
    const src_item1 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item1 + '.png';
    const src_item2 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item2 + '.png';
    const src_item3 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item3 + '.png';
    const src_item4 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item4 + '.png';
    const src_item5 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item5 + '.png';
    const src_item6 = process.env.PUBLIC_URL + '/images/item/' + data.info.participants[index].item6 + '.png';
    let src_main_rune = null;
    for (let j = 0; j < Rune.length; j++) {
        if (Rune[j].id == data.info.participants[index].perks.styles[0].style) {
            for (let k = 0; k < Rune[j].slots[0].runes.length; k++) {
                if (Rune[j].slots[0].runes[k].id == data.info.participants[index].perks.styles[0].selections[0].perk) {
                    src_main_rune = process.env.PUBLIC_URL + '/images/' + Rune[j].slots[0].runes[k].icon;
                    break;
                }
            }
        }
    }
    let src_sub_rune = null;
    for (let j = 0; j < Rune.length; j++) {
        if (Rune[j].id == data.info.participants[index].perks.styles[1].style) {
            src_sub_rune = process.env.PUBLIC_URL + '/images/' + Rune[j].icon;
            break;
        }
    }

    const SpellArray = Object.entries(SummonerSpell.data);
    let src_spell1 = null;
    for (let j = 0; j < SpellArray.length; j++) {
        if (data.info.participants[index].summoner1Id == SpellArray[j][1].key) {
            src_spell1 = process.env.PUBLIC_URL + '/images/summonerspell/' + SpellArray[j][1].id + '.png';
        }
    }
    let src_spell2 = null;
    for (let j = 0; j < SpellArray.length; j++) {
        if (data.info.participants[index].summoner2Id == SpellArray[j][1].key) {
            src_spell2 = process.env.PUBLIC_URL + '/images/summonerspell/' + SpellArray[j][1].id + '.png';
        }
    }
    let color = null;
    if (data.info.participants[index].win) color = 'rgb(236,242,255)';
    else color = 'rgb(255,240,243)';
    let color_dark = null;
    if (data.info.participants[index].win) color_dark = 'rgb(179,205,255)';
    else color_dark = 'rgb(255,186,195)';
    let color_deepdark = null;
    if (data.info.participants[index].win) color_deepdark = 'rgb(83,131,232)';
    else color_deepdark = 'rgb(232,64,87)';

    const style = {
        width: '100%',
        borderRadius: '10px',
        display: 'flex',
        flexFlow: 'row no wrap',
        marginBottom: '10px'
    }
    style.backgroundColor = color;
    const minute = Math.floor(data.info.gameDuration / 60);
    const second = data.info.gameDuration % 60;
    let gameMode = null;
    if (data.info.queueId == "430") gameMode = "일반"
    else if (data.info.queueId == "429") gameMode = "솔로 랭크"
    else if (data.info.queueId == "440") gameMode = "자유 5:5 랭크"
    else if (data.info.queueId == "450") gameMode = "무작위 총력전"
    else if (data.info.queueId == "1900") gameMode = "U.R.F"
    const killPer = Math.floor(data.info.participants[index].challenges?.killParticipation * 100);
    let team100 = [];
    let team200 = [];
    let fontWeight = null;
    for (let i = 0; i < data.info.participants.length; i++) {
        const src_champ = process.env.PUBLIC_URL + '/images/champion/' + data.info.participants[i].championName + '.png';

        if (i == index) fontWeight = "bold";
        else fontWeight = "normal";
        if (data.info.participants[i].teamId == "100") {
            team100.push(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={src_champ} style={{ width: '20px', height: '20px', marginRight: '5px' }}></img>
                    <Link target="_blank" to={'/pvp/' + data.info.participants[i].summonerName} style={{ fontWeight: fontWeight, width: '80%', fontSize: '12px', textDecoration: 'none', color: 'black', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{data.info.participants[i].summonerName}</Link>
                </div>
            )
        }
        else {
            team200.push(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={src_champ} style={{ width: '20px', height: '20px', marginRight: '5px' }}></img>
                    <Link target="_blank" to={'/pvp/' + data.info.participants[i].summonerName} style={{ fontWeight: fontWeight, width: '80%', fontSize: '12px', textDecoration: 'none', color: 'black', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{data.info.participants[i].summonerName}</Link>
                </div>
            )
        }
    }
    return (
        <div style={{ display: 'flex', flexFlow: 'column wrap', width: '100%' }}>
            <div style={style}>
                <div style={{ width: '1%', backgroundColor: color_deepdark, borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}></div>
                <div name="game_info" style={{ width: '15%', display: 'flex', flexFlow: 'row wrap', alignItems: 'space-around', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0', width: '100%', justifyContent: 'center', fontSize: '16px' }}>{gameMode}</div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '0', width: '100%', justifyContent: 'center', fontSize: '12px' }}>{minute}분{second}초</div>
                </div>
                <div name="user_info" style={{ width: '30%', display: 'flex', flexFlow: 'column wrap' }}>
                    <div style={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <div name="champion" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundImage: `url(${src_champ})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative' }}>
                            <div style={{ width: '15px', height: '15px', backgroundColor: 'black', fontSize: '15px', color: 'white', borderRadius: '50%', position: 'absolute', left: '0', bottom: '0' }}>{data.info.participants[index].champLevel}</div>
                        </div>
                        <div name="spell" style={{ width: '30px', height: '60px' }}>
                            <img src={src_spell1} style={{ width: '30px', height: '30px', borderRadius: '8px' }}></img>
                            <img src={src_spell2} style={{ width: '30px', height: '30px', borderRadius: '8px' }}></img>
                        </div>
                        <div name="rune" style={{ width: '30px', height: '60px', marginRight: '20px' }}>
                            <img src={src_main_rune} style={{ width: '30px', height: '30px' }}></img>
                            <img src={src_sub_rune} style={{ width: '30px', height: '30px' }}></img>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item0})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item1})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item2})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item3})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item4})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item5})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                        <div style={{ width: '30px', height: '30px', backgroundImage: `url(${src_item6})`, borderRadius: '8px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginRight: '1px', backgroundColor: color_dark }}></div>
                    </div>
                </div>
                <div name="score" style={{ width: '15%', display: 'flex', flexFlow: 'column wrap', alignItems: 'center', justifyContent: 'space-around' }}>
                    <p style={{ fontSize: '16px' }}>{data.info.participants[index].kills} / {data.info.participants[index].deaths} / {data.info.participants[index].assists}</p>
                    <p style={{ fontSize: '12px' }}>{(data.info.participants[index].challenges?.kda)?.toFixed(2)} : 1</p>
                    <p style={{ fontSize: '12px' }}>킬관여 {killPer}%</p>
                    <p style={{ fontSize: '12px' }}>CS {data.info.participants[index].totalMinionsKilled + data.info.participants[index].neutralMinionsKilled}</p>
                </div>
                <div name="participants" style={{ width: '35%', display: 'flex', flexFlow: 'row no wrap' }}>
                    <div style={{ width: '50%', display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-around' }}>{team100}</div>
                    <div style={{ width: '50%', display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-around' }}>{team200}</div>
                </div>
                <div name="detail" style={{ width: '4%', cursor: 'pointer', backgroundColor: color_dark, borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}
                    onMouseEnter={(event) => { event.target.style.backgroundColor = color_deepdark }}
                    onMouseLeave={(event) => { event.target.style.backgroundColor = color_dark }}
                    onClick={changeView}
                ></div>
            </div>

            {detail?<MatchData_Detail id={props.id} index={index}></MatchData_Detail>:null}
        </div>
    )

}
