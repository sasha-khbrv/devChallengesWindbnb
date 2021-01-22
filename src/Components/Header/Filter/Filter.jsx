import React from 'react';
function Filter() {
  return (
    <div className="filterContainer">
      <div className="filterBtn-left">
        <button className="btn">Helsinki, Finland</button>
      </div>
      <div className="filterBtn-center">
        <button className="btn btnPlaceholder">Add guests</button>
      </div>
      <div className="filterBtn-right">
        <button className="btn btnIcon"><span className="material-icons">search</span></button>
      </div>      
    </div>
  );
}

export default Filter;