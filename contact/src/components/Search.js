import React from 'react';
import './css/Search.css'

function Search(props) {
    return (
        <div className='Search_body'>
        <form onSubmit={(event)=>{
            event.preventDefault();
            const name=event.target.name.value;
            props.onSearch(name);
        }}>
             <input type="text" name="name" placeholder={props.target}></input>
             <button type="submit">검색</button>
        </form></div>
    );
}

export default Search;