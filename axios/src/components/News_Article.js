import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width : 300px;
    height : 300px;
    margin : 10px;
    box-shadow : 5px 5px 5px rgba(0,0,0,0.6);
    border:1px black solid;
    position : relative;
`
const StyledUl = styled.ul`
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

export default function News_Article(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            console.log(props.Article_mode);
            if(props.Article_mode=="headline"){
                const response_h = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=b2df109b12fe455b85be2923d2b04db8');
                setData(response_h.data);
            }
            else if(props.Article_mode=="custom"){
                const response_c = await axios.get('https://newsapi.org/v2/everything?q=리그-오브-레전드&apiKey=b2df109b12fe455b85be2923d2b04db8');
                setData(response_c.data);
            }
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
    return (
        <StyledUl>{lis}</StyledUl>
    )
}
