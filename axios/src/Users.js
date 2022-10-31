import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Users() {
    const [users, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchUser = async () => {
        try {
            setError(null);
            setUser(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(response.data);
        }
        catch (e){
            setError(e);

        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchUser();

    },[]);
    if(loading) return <div>로딩중</div>
    if(error) return <div>에러</div>
    if(!users) return null;
    let lis = [];
    for(let i=0; i<users.length; i++) {
        lis.push(
            <li>{users[i].username}:({users[i].name})</li>
        )
    }
    return (
        <div>
            <ul>{lis}</ul>
            <button onClick={fetchUser}>다시 불러오기</button>
        </div>
      );
}
