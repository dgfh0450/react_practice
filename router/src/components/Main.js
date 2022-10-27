import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Main.css';
import Korea from './image/korea.jpg'

function Main(props) {
    return (
        <div className='Main_body'>
            <img src={Korea}></img>
            <NavLink  to='/content/food' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='K-FOOD'></NavLink>
            <NavLink  to='/content/influencer' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='K-INFLUENCER'></NavLink>
            <NavLink  to='/content/contents' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='K-CONTENT'></NavLink>
            <NavLink  to='/content/tour' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='K-TOUR'></NavLink>
        </div>
    );
}

export default Main;