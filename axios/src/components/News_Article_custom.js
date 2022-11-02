import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Form from './Form'
const ImgContainer = styled.div`
    width : 20%;
    display : flex; 
    justify-content : center;
    margin-right : 10%;
    border-right : 1px black solid;
`

const StyledDiv = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin : 15px;
    box-shadow : 5px 5px 5px rgba(0,0,0,0.6);
    border:1px black solid;
`
const StyledUl = styled.ul`
    position : relative;
    display : flex;
    flex-flow : wrap;
    margin : 0px;
    padding : 30px;
    font-size : 20px;
    line-height : 100%;
`
const StyledImg = styled.img`
    height : 100px;
`

export default function News_Article_custom(props) {

    let Current_date = new Date();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [q, setQ] = useState(null);
    const fetchData = async () => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const response_h = await axios.get('https://newsapi.org/v2/everything?pageSize=9&page='+props.page+'&q='+props.q+'&sortBy='+props.sort+'&apiKey=b2df109b12fe455b85be2923d2b04db8');
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
    if(data.articles.length==0) return <div>no articles</div>
    const lis = [];
    for(let i=0; i<data.articles.length; i++) {

            lis.push(
                <StyledDiv>
                    <ImgContainer>
                        <StyledImg src={data.articles[i].urlToImage}></StyledImg>
                    </ImgContainer>
                    <a href={data.articles[i].url} target={"_blank"} style={{color:'black', textDecoration:'none'}}><b>{data.articles[i].title}</b></a>
                </StyledDiv>
            );
    }
    let year = Current_date.getFullYear();
    let _month = Current_date.getMonth()+1;
    let month = null;
    let date = null;
    if(Current_date.getDate()<10)
        date = '0'+Current_date.getDate();
    else date = Current_date.getDate();
    if(_month<10)
        month = '0'+_month;
    else month = _month;

    return (
        <StyledUl>
            <p style={{margin:'0px', position:'absolute', top:'0%', left:'50%', transform:'translateX(-50%)'}}>{year}-{month}-{date}</p>
            {lis}
        </StyledUl>
    )
}
