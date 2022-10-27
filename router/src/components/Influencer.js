import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Influencer.css'

function Influencer(props) {
    return (
        <div>
            <NavLink to='/content/influencer/bts' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='bts'></NavLink>
            <NavLink to='/content/influencer/son' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='son'></NavLink>
            <NavLink to='/content/influencer/blackpink' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='blackpink'></NavLink>
            <NavLink to='/content/influencer/faker' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='faker'></NavLink>
        </div>
    );
}

export default Influencer;