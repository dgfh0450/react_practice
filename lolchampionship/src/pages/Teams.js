import React from 'react'
import { useParams } from 'react-router-dom'

export default function Teams() {
    let teamName= useParams();
    const teamData ={
        GEN:[["Doran", "top"], ["Peanut", "jug"], ["Chovy", "mid"], ["Ruler", "adc"], ["Lehends", "spt"]],
        T1:[["Zeus", "top"],[ "Oner", "jug"], ["Faker", "mid"],[ "Gumayusi", "adc"],[ "Keria", "spt"]],
        DK:[["Nuguri", "top"], [ "Canyon", "jug"], ["Showmaker", "mid"], ["Deokdam", "adc"],[ "Kellin", "spt"]],
        DRX:[["Kingen", "top"],["Juhan", "jug"],["Zeka", "mid"],[ "Deft", "adc"], ["Beryl", "spt"]],
        JDG : [["369", "top"],  ["Kanavi", "jug"], ["Yagao", "mid"],["Hope", "adc"], ["Missing", "spt"]],
        TES : [["WayWard", "top"],  ["Tian", "jug"], ["Knight", "mid"], ["Jackeylove", "adc"], ["Mark", "spt"]],
        EDG : [["Flandre", "top"], ["Jiejie", "jug"], ["Scout", "mid"], ["Viper", "adc"], ["Meiko", "spt"]],
        RNG : [["Breathe", "top"], ["Wei", "jug"], ["Xiaohu", "mid"], ["Gala", "adc"], ["Ming", "spt"]],
        RGE : [["Odoamne", "top"], ["Malrang", "jug"], ["Larssen", "mid"], ["Comp", "adc"], ["Trymbi", "spt"]],
        G2 : [["Brokenblade", "top"], ["Jankos", "jug"], ["CaPs", "mid"], ["Flakked", "adc"], ["Targamas", "spt"]],
        FNC : [["Wunder", "top"], ["Razork", "jug"], ["Humanoid", "mid"], ["Upset", "adc"] , ["Hylissang", "spt"]],
        MAD : [["Armut", "top"], ["Elyoya", "jug"], ["Nisqy", "mid"], ["UNFORGIVEN", "adc"], ["Kaiser", "spt"]],
        C9 : [["Fudge", "top"], ["Blaber", "jug"], ["Jensen", "mid"], ["Berserker", "adc"], ["Zven", "spt"]],
        100 : [["Ssumday", "top"], ["Closer", "jug"], ["Abbedagge", "mid"], ["FBI", "adc"], ["Huhi", "spt"]],
        EG : [["Impact", "top"], ["Inspired", "jug"], ["Jojopyun", "mid"], ["Danny", "adc"], ["Kaori", "spt"]],
        CFO : [["Rest", "top"], ["Gemini", "jug"], ["Mission", "mid"], ["Atlen", "adc"], ["Koala", "spt"]],
        SGB : [["Hasmed", "top"], ["BeanJ", "jug"], ["Froggy", "mid"], ["Shogun", "adc"], ["Taki", "spt"]],
        BYG : [["Liang", "top"],  ["HuSha", "jug"], ["Minji", "mid"], ["Wako", "adc"] , ["Kino", "spt"]],
        GAM : [["Kiaya", "top"], ["Levi", "jug"], ["Kati", "mid"], ["Sty1e", "adc"] ,["Bie", "spt"]],
        DFM : [["Evi", "top"], ["Steal", "jug"] , ["Yaharong", "mid"], ["Yutapon" , "adc"], ["Harp", "spt"]],
        CHF : [["Topoon", "top"],["Arthur", "jug"], ["Tally", "mid"], ["Raes", "adc"] , ["Aladoric", "spt"]],
        IW : [["StarScreen", "top"], ["Ferret", "jug"], ["Serin", "mid"], ["HolyPhoenix", "adc"],["Farfetch", "spt"]],
        ISG : [["ADD", "top"], ["Grell", "jug"], ["Seiya", "mid"], ["Gavotto", "adc"], ["Jelly", "spt"]],
        LLL : [["Robo", "top"], ["Croc", "jug"], ["Tinowns", "mid"], ["Brance", "adc"], ["Ceos", "spt"]]

    }
    let lis = [];
    const arr = Object.entries(teamData);
    for(let i=0; i<arr.length; i++) {
        if(teamName.teams==arr[i][0])
        {
            let img = null;
            for(let j=0; j<arr[i][1].length; j++) {
                img = process.env.PUBLIC_URL+'/images/lane'+arr[i][1][j][1]+'.jpg';

                lis.push(<li style={{ fontFamily:'RIXGOL', display:'flex', alignItems:'center'}}><img style={{width:'30px', height:'30px'}} src={img}></img> - {arr[i][1][j][0]}</li>)
            }
            return(
                <div>
                    <h1 style={{fontFamily:'RIXGOB'}}>{arr[i][0]}</h1>
                    <ul>{lis}</ul>
                </div>
            )
        }

    }
}
