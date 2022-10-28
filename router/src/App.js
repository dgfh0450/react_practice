import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './components/Artilce';
import Food from './components/Food';
import Food_Article from './components/Food_Article';
import Header from './components/Header';
import Influencer from './components/Influencer';
import Main from './components/Main';
import Nav from './components/Nav';
import './App.css'

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
      </Routes>
    </body>
      
    </BrowserRouter>
  );
}

export default App;