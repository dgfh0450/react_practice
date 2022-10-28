import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css'

function Header(props) {
    return (
        <div className='Header_body'>
            <NavLink to='/' className={({isActive})=>isActive ? 'header_active' : 'header_inactive'}><h1>REACT ROUTE 실습 BLOG</h1></NavLink>            
        </div>
    );
}

export default Header;