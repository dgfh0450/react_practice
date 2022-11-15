import React from 'react'
import gameMode from '../data/ko_KR/gameMode.json'

export default function Rank(props) {
    let queueType = null;
    if (!props.data) return (
        <div style={{ alignItems: 'center' }}>
            <div style={{ backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', fontSize: '20px', padding: '10px' }}>UNRANKED</div>
        </div>
    )
    for (const queue of gameMode) {
        if (props.data.queueType.includes(queue.notes)) {
            queueType = queue.toKR;
        }
    }
    let prMatch = null;
    if (props.data.miniSeries) {
        prMatch = <p>{props.data.miniSeries.progress}</p>
    }
    const winRate = Math.floor(props.data.wins / (props.data.wins + props.data.losses) * 100);
    const src_amblem = process.env.PUBLIC_URL + '/images/ranked_emblems/Emblem_' + props.data.tier + '.png';
    return (
        <div style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', padding: '10px' }}>
                <img src={src_amblem} style={{ height: '150px', marginRight: '5px' }}></img>
                <div style={{ width: '70%', display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-around' }}>
                    <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{props.data.tier} {props.data.rank}</div>
                    <div style={{ fontSize: '20px' }}>{props.data.leaguePoints}LP</div>
                </div>
                <div style={{ width: '30%', textAlign: 'right', display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-around' }}>
                    <div style={{}}>{props.data.wins}승{props.data.losses}패</div>
                    <div style={{}}>승률 {winRate}%</div>
                </div>
            </div>
        </div>
    )
}
