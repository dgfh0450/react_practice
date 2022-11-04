import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Nav from './components/Nav'
import Worlds from './pages/Worlds'
import Teams from './pages/Teams'

export default function App() {
  return (
    <div style={{backgroundColor:'white'}}>
      <div style={{width:'60%', border:'1px black solid', margin:'0 auto'}}>
        <Nav></Nav>
        <Routes>
          <Route path='/*' element={<Main></Main>}></Route>
          <Route path='/championship' element={<Worlds></Worlds>}></Route>
          <Route path='/championship/:teams' element={<Teams></Teams>}></Route>
        </Routes>
      </div>
    </div>

  )
}
