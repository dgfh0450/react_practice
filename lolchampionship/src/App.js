import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Nav from './components/Nav'
import Worlds from './pages/Worlds'
import Teams from './pages/Teams'
import GlobalStyle from './components/GloblaStyle'

export default function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <div style={{backgroundColor:'#0f1519'}}>
      <div style={{width:'80%', border:'1px rgba(255,255,255,0.3) solid', margin:'0 auto'}}>
        <Nav></Nav>
        <Routes>
          <Route path='/*' element={<Main></Main>}></Route>
          <Route path='/championship' element={<Worlds></Worlds>}></Route>
          <Route path='/championship/:teams' element={<Teams></Teams>}></Route>
        </Routes>
      </div>
    </div>
</>
  )
}
