import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Tour.css'

export default function Tour() {
  return (
        <div className='_body'>
            <NavLink to='/content/tour/jeju' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='jeju'></NavLink>
            <NavLink to='/content/tour/seoul' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='seoul'></NavLink>
            <NavLink to='/content/tour/busan' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='busan'></NavLink>
            <NavLink to='/content/tour/dokdo' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='dokdo'></NavLink>
        </div>
  )
}
