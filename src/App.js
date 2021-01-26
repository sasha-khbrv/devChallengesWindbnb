import React, { useState } from 'react';
import stays from './API/stays.json';
import './Sass/style.scss'
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';

function App() {
  //to expand/collapse filter
  const [filterState, setFilterState] = useState(false);
  //to made the field active
  const [fieldActive, setFieldActive] = useState('location');
  //to choose location from the city's list
  const [location, setLocation] = useState('Choose location');
  //guests counters
  const [adultGuests, setAdultsCount] = useState(0);
  const [kids, setKidsCount] = useState(0);
  const sumOfGuests = adultGuests + kids;
  //to filter the cards
  const [cardsFilter, setCardsFilter] = useState('Choose location');

  return (
    <div className="container">
      <Header
        stays={stays} 
        filterState={filterState}
        setFilterState={setFilterState}
        fieldActive={fieldActive}
        setFieldActive={setFieldActive}
        location={location}
        setLocation={setLocation}
        adultGuests={adultGuests}
        setAdultsCount={setAdultsCount}
        kids={kids}
        setKidsCount={setKidsCount}
        sumOfGuests={sumOfGuests}
        setCardsFilter={setCardsFilter}
      />
      <Cards
        stays={stays} cardsFilter={cardsFilter} />
      <Footer />
    </div>
  );
}

export default App;
