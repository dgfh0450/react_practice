import React from 'react';
import './App.css'
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className='Body'>
      <Header></Header>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;