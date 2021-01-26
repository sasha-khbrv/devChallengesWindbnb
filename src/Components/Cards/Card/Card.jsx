import React from 'react';

function Card({photo, alt, isSuperHost, tags, rating, title}) {
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={photo} alt={alt}/>
      </div>
      <div className="cardDescr">
        {isSuperHost && <span className="badge">Super host</span>}        
        <span className="basicText cardTags">{tags}</span>
        <span className="basicText cardRating">{rating}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;