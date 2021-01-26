import React from 'react';

function Guests({adultGuests, setAdultsCount, kids, setKidsCount}) {
  const counterDecrementAdults = () => {
    if(adultGuests === 0) return
    setAdultsCount(adultGuests - 1);
  }
  const counterIncrementAdults = () => {
    setAdultsCount(adultGuests + 1);
  }

  const counterDecrementKids = () => {
    if(kids === 0) return
    setKidsCount(kids - 1);
  }
  const counterIncrementKids = () => {
    setKidsCount(kids + 1);
  }

  return (
    <div className="filterItem">
      <div className="guestsContainer">
        <div className="guestItem">
          <span className="filterTitleTypo">Adults</span>
          <span className="filterHintTypo">Ages 13 or above</span>
          <div>
            <button className="btn btnCount" onClick={counterDecrementAdults}>-</button>
            <span className="filterTitleTypo"> {adultGuests} </span>
            <button className="btn btnCount" onClick={counterIncrementAdults}>+</button>
          </div>
        </div>
        <div className="guestItem">
          <span className="filterTitleTypo">Children</span>
          <span className="filterHintTypo">Ages 2-12</span>
          <div>
            <button className="btn btnCount" onClick={counterDecrementKids}>-</button>
            <span className="filterTitleTypo"> {kids} </span>
            <button className="btn btnCount" onClick={counterIncrementKids}>+</button>
          </div>
        </div>    
      </div>
    </div>

  );
}

export default Guests;