import React from 'react';
import './css/Nav.css'

function Nav(props) {
    return (
        <div className='Nav_body'>
            <ul>
                <li><a href='#' onClick={()=>{
                    props.onChangeMode("READ");
                }}>List</a></li>
                <li><a href='#' onClick={()=>{
                    props.onChangeMode("CREATE")
                }}>Create</a></li>
                <li><a href='#' onClick={()=>{
                    props.onChangeMode("SEARCH");
                }}>Search</a></li>
                <li><a href='#' onClick={()=>{
                    localStorage.clear();
                    props.onChangeMode("READ");
                    window.location.reload();
                }}>Clear</a></li>
            </ul>
        </div>
    );
}

export default Nav;