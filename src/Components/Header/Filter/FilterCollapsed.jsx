import React from 'react';
function FilterCollapsed({filterState, setFilterState}) {

  return (
    <div className="filterContainer">
      <div className="filterBtn filterBtn-left">
        <button className="btn" onClick={() => setFilterState(!filterState)}>
          Helsinki, Finland
        </button>
      </div>
      <div className="filterBtn filterBtn-center">
        <button className="btn btnPlaceholder">
          Add guests
        </button>
      </div>
      <div className="filterBtn filterBtn-right">
        <button className="btn btnIcon"><span className="material-icons">search</span></button>
      </div>      
    </div>
  );
}

export default FilterCollapsed;