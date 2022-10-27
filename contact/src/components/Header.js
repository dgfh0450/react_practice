import React from 'react';
import './css/Header.css'

function Header(props) {
    return (
        <div className='Header_body'>
            <a href='#' onClick={()=>{
                window.location.reload();
            }}><h1>REACT 실습 전화번호부</h1></a>
        </div>
    );
}

export default Header