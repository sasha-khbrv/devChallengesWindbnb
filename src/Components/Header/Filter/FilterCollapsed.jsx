import React from 'react';
function FilterCollapsed({filterState, setFilterState, fieldActive, setFieldActive, location, sumOfGuests, setCardsFilter}) {
  const btnLocation = location !== 'Choose location' ? "btn" : "btn btnPlaceholder";
  const btnGuests = sumOfGuests > 0 ? "btn" : "btn btnPlaceholder";
  const guestBtnValue = sumOfGuests > 0 ? `${sumOfGuests} guests` : "Add guests";
  
  return (
    <div className="filterContainer filterCollapsed">
      <div>
        <button className={btnLocation} 
          onClick={() => {
            setFilterState(!filterState)
            setFieldActive('location')
          }}>
          {location}
        </button>
      </div>
      <div>
      <button className={btnGuests}
          onClick={() => {
            setFilterState(!filterState)
            setFieldActive('guests')
          }}>
          {guestBtnValue}
        </button>
      </div>
      <div>
        <button className="btn btnIcon" onClick={() => setCardsFilter(location)}>
          <span className="material-icons">search</span>
        </button>  
      </div>    
    </div>
  );
}

export default FilterCollapsed;