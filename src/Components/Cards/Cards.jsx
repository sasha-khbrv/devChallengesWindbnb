import React from 'react';
import Card from './Card/Card';

function Cards({stays, cardsFilter}) {
  const cardArray = stays
    .filter(item => {
      if(cardsFilter === 'Choose location') {return item}
      return item.location === cardsFilter
    })
    .map(item => 
      <Card key={item.id} 
            photo={item.photo}
            alt={item.alt} 
            isSuperHost={item.isSuperHost} 
            tags={item.tags} 
            rating={item.rating} 
            title={item.title} />);

  let staysAmount = (cardArray.length === 1) ? `${cardArray.length} stay` : `${cardArray.length} stays`
  
  return (
    <main className="contentContainer">
      <div className="contentHeader">
        <h1>Stays in Finland</h1>
        <span className="asideText">{staysAmount}</span>
      </div>
      <div className="cardsGrid">
        {cardArray}
      </div>
    </main>
  );
}

export default Cards;