import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Food from './components/Food';
import Food_Article from './components/Food_Article';
import Header from './components/Header';
import Influencer from './components/Influencer';
import Main from './components/Main';
import Nav from './components/Nav';
import './App.css'
import Contents from './components/Contents';
import Influencer_Article from './components/Influencer_Article';
import Contents_Article from './components/Contents_Article';
import Tour from './components/Tour';
import Tour_Article from './components/Tour_Article';

function App(props) {
  return (
    <BrowserRouter>
    <body className='App_body'>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/content/food' element={<Food></Food>}></Route>
        <Route path='/content/food/:foods' element={<Food_Article></Food_Article>}></Route>
        <Route path='/content/influencer' element={<Influencer></Influencer>}></Route>
        <Route path='/content/influencer/:influencers' element={<Influencer_Article></Influencer_Article>}></Route>
        <Route path='/content/contents' element={<Contents></Contents>}></Route>
        <Route path='/content/contents/:contents' element={<Contents_Article></Contents_Article>}></Route>
        <Route path='/content/tour' element={<Tour></Tour>}></Route>
        <Route path='/content/tour/:tours' element={<Tour_Article></Tour_Article>}></Route>
      </Routes>
    </body>
    </BrowserRouter>
  );
}

export default App;