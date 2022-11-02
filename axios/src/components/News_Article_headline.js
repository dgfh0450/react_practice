import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width : 400px;
    height : 400px;
    margin : 10px;
    box-shadow : 5px 5px 5px rgba(0,0,0,0.6);
    border:1px black solid;
    position : relative;
`
const StyledUl = styled.ul`
    position : relative;
    display : flex;
    flex-flow : wrap;
    border:1px red solid;
    margin : 0px;
    padding : 30px;
    justify-content : center;
    font-size : 25px;
`
const StyledImg = styled.img`
    border:1px black solid;
    height:50%;
    position : absolute;
    left:50%;
    bottom:0%;
    transform:translate(-50%, 0);
`

export default function News_Article_headline(props) {

    let Current_date = new Date();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const response_h = await axios.get('https://newsapi.org/v2/top-headlines?pageSize=9&page='+props.page+'&country=kr&apiKey=b2df109b12fe455b85be2923d2b04db8');
            setData(response_h.data);
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
    if(error) return <div>error...</div>
    if(!data) return null;
    console.log(data);
    const lis = [];
    for(let i=0; i<data.articles.length; i++) {

            lis.push(
                <StyledDiv>
                    <a href={data.articles[i].url} style={{color:'black', textDecoration:'none'}}><b>{data.articles[i].title}</b></a>
                    <StyledImg src={data.articles[i].urlToImage}></StyledImg>
                </StyledDiv>
            );
    }
    let date = <p style={{position : 'absolute', top:'0%', left:'0%', border:'1px black solid', fontSize:'12px', margin : '0px'}}>{Current_date.getFullYear()}-{Current_date.getMonth()+1}-{Current_date.getDate()}</p>
    return (
        <StyledUl>
            {date}
            {lis}</StyledUl>
    )
}
