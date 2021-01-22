import React from 'react';
import './Sass/style.scss'
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
function App() {
  return (
    <div className="container">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
