import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Rank from './Rank';

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
        catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) return <div>loading...</div>
    if (error) return <div>error...user</div>
    if (!data) return null;
    return (
        <div>
            <div name="solo"><Rank data={data[0]}></Rank></div>
            <div name="flex"><Rank data={data[1]}></Rank></div>
        </div>
    )
}
