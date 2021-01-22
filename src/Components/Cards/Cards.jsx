import React from 'react';
import Card from './Card/Card';

function Cards() {
  return (
    <main className="contentContainer">
      <div className="contentHeader">
        <h1>Stays in Finland</h1>
        <span className="asideText">12+ stays</span>
      </div>
      <div className="cardsGrid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Cards;