import React from 'react';

function Guests() {
  return (
    <div className="guestsContainer">
      <div className="guestItem">
        <span className="filterTitleTypo">Adults</span>
        <span className="filterHintTypo">Ages 13 or above</span>
        <div>
          <button className="btn btnCount">-</button>
          <span className="filterTitleTypo"> 0 </span>
          <button className="btn btnCount">+</button>
        </div>
      </div>
      <div className="guestItem">
        <span className="filterTitleTypo">Children</span>
        <span className="filterHintTypo">Ages 2-12</span>
        <div>
          <button className="btn btnCount">-</button>
          <span className="filterTitleTypo"> 0 </span>
          <button className="btn btnCount">+</button>
        </div>
      </div>    
    </div>
  );
}

export default Guests;