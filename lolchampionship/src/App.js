import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Nav from './components/Nav'
import Worlds from './pages/Worlds'
import Teams from './pages/Teams'
import GlobalStyle from './components/GloblaStyle'
import Pvp from './pages/Pvp'
import Form from './components/Form'
import Summoner from './pages/Summoner'

export default function App() {
  const [sum, setSum] = useState(null);
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <div style={{backgroundColor:'#0f1519'}}>
      <div style={{width:'80%', border:'1px rgba(255,255,255,0.3) solid', margin:'0 auto'}}>
        <Nav></Nav>
        <Routes>
          <Route path='/*' element={<Main></Main>}></Route>
          <Route path='/pvp' element={
            <Form changeTarget={(target)=>{setSum(target);}}></Form>}>
          </Route>
          <Route path='/pvp/:name' element={<Summoner name={sum}></Summoner>}></Route>
          <Route path='/championship' element={<Worlds></Worlds>}></Route>
          <Route path='/championship/:teams' element={<Teams></Teams>}></Route>
        </Routes>
      </div>
    </div>
</>
  )
}
