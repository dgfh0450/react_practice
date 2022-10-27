import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './components/Artilce';
import Food from './components/Food';
import Header from './components/Header';
import Influencer from './components/Influencer';
import Main from './components/Main';
import Nav from './components/Nav';

function App(props) {
  return (
    <BrowserRouter>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/content/food' element={<Food></Food>}></Route>
        <Route path='/content/influencer' element={<Influencer></Influencer>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;