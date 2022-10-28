import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Food.css'

function Food(props) {
    return (
        <div className='_body'>
            <NavLink  to='/content/food/kimchi' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='kimchi'></NavLink>
            <NavLink  to='/content/food/bulgogi' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='bulgogi'></NavLink>
            <NavLink  to='/content/food/bibimbap' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='bibimbap'></NavLink>
            <NavLink  to='/content/food/pork' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='pork'></NavLink>
        </div>
    );
}

export default Food;