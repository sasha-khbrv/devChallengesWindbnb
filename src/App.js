import React from 'react';
import stays from './API/stays.json';
import './Sass/style.scss'
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Cards stays={stays} />
      <Footer />
    </div>
  );
}

export default App;
