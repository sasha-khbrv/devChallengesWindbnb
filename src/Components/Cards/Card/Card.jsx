import React from 'react';

function Card() {
  return (
    <div className="cardGrid">
      <div className="cardLayout">
        <div className="cardIng">
          <img />
        </div>
        <div className="cardDescr">
          <span className="tag">Super host</span>
          <span>Entire apartment . 2 beds</span>
          <span className="cardRating">4.6</span>
        </div>
        <h2>Stylist apartment in center of the city</h2>
      </div>
    </div>
  );
}

export default Card;