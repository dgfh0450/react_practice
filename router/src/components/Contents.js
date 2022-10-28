import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom'
import './css/Contents.css'

export default function Contents() {
  return (
        <div className='_body'>
                <NavLink  to='/content/contents/squidgame' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='squidgame'></NavLink>
                <NavLink  to='/content/contents/parasite' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='parasite'></NavLink>
                <NavLink  to='/content/contents/kpop' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='kpop'></NavLink>
                <NavLink  to='/content/contents/lostark' className={({ isActive }) => isActive ? 'active' : 'inactive'} id='lostark'></NavLink>
            </div>

  )
}
