import React, { useState } from 'react';
import stays from './API/stays.json';
import './Sass/style.scss'
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';

function App() {
  //to expand/collapse filter
  const [filterState, setFilterState] = useState(false);

  return (
    <div className="container">
      <Header 
        filterState={filterState}
        setFilterState={setFilterState}/>
      <Cards
        stays={stays} />
      <Footer />
    </div>
  );
}

export default App;
