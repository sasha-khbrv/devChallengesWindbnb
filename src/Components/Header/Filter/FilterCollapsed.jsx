import React from 'react';
function FilterCollapsed({filterState, setFilterState}) {
  const onClickHandler = () => {
    
    setFilterState(!filterState)
  }
  return (
    <div className="filterContainer filterCollapsed">
      <div>
        <button className="btn btnPlaceholder" onClick={onClickHandler}>
          Choose location
        </button>
      </div>
      <div>
        <button className="btn btnPlaceholder" onClick={onClickHandler}>
          Add guests
        </button>
      </div>
      <div>
        <button className="btn btnIcon">
          <span className="material-icons">search</span>
        </button>  
      </div>    
    </div>
  );
}

export default FilterCollapsed;