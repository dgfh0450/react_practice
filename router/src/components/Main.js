import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Main.css';
import Korea from './image/korea.jpg'

function Main(props) {
    return (
        <div className='Main_body'>
        <img src={Korea} id='korea'></img>
        <div className='Main_Nav_body'>
            <NavLink  to='/content/food' className={({ isActive }) => isActive ? 'active' : 'main_inactive'} id='K-FOOD'></NavLink>
            <NavLink  to='/content/influencer' className={({ isActive }) => isActive ? 'active' : 'main_inactive'} id='K-INFLUENCER'></NavLink>
            <NavLink  to='/content/contents' className={({ isActive }) => isActive ? 'active' : 'main_inactive'} id='K-CONTENTS'></NavLink>
            <NavLink  to='/content/tour' className={({ isActive }) => isActive ? 'active' : 'main_inactive'} id='K-TOUR'></NavLink>
        </div></div>
    );
}

export default Main;