import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
        <NavLink  to='/content/food'>Food</NavLink>
        <NavLink  to='/content/influencer'>influencer</NavLink>
        <NavLink  to='/content/contents'>contents</NavLink>
        <NavLink  to='/content/tour'>tour</NavLink>
        </div>
    );
}

export default Nav;