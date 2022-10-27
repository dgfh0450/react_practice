import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css'

function Nav(props) {
    return (
        <div>
        <NavLink  to='/content/food' className={({ isActive }) => isActive ? 'nav_active' : 'nav_inactive'} id='Food'>Food</NavLink>
        <NavLink  to='/content/influencer' className={({ isActive }) => isActive ? 'active' : 'nav_inactive'} id='Influencer'>influencer</NavLink>
        <NavLink  to='/content/contents' className={({ isActive }) => isActive ? 'active' : 'nav_inactive'} id='Contents'>contents</NavLink>
        <NavLink  to='/content/tour' className={({ isActive }) => isActive ? 'active' : 'nav_inactive'} id='Tour'>tour</NavLink>
        </div>
    );
}

export default Nav;