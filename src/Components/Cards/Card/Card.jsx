import React from 'react';
import photo from '../../../Images/apartmentPhoto/living-room-2569325_1280.jpg'

function Card() {
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={photo} alt="Stylist apartment in center of the city"/>
      </div>
      <div className="cardDescr">
        <span className="badge">Super host</span>
        <span className="basicText cardTags">Entire apartment . 2 beds</span>
        <span className="basicText cardRating">4.6</span>
      </div>
      <h2>Stylist apartment in center of the city</h2>
    </div>
  );
}

export default Card;