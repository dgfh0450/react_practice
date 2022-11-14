import React from 'react'

export default function Rank(props) {
    let queueType = null;
    const rank_type = [
        ["SOLO", "솔로랭크"],
        ["FLEX", "자유랭크"]
    ]
    for (const type of rank_type) {
        if (props.data.queueType.includes(type[0])) {
            queueType = type[1];
        }
    }
    let prMatch = null;
    if (props.data.miniSeries) {
        prMatch = <p>{props.data.miniSeries.progress}</p>
    }
    const winRate = Math.floor(props.data.wins / (props.data.wins + props.data.losses) * 100);
    console.log(winRate);
    const src_amblem = process.env.PUBLIC_URL + '/images/ranked_emblems/Emblem_' + props.data.tier + '.png';
    return (
        <div style={{ alignItems: 'center' }}>
            <div style={{ backgroundColor: '#31313c', borderRadius: '3px', margin: '5px', fontSize: '20px', padding: '10px' }}>{queueType}</div>
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
