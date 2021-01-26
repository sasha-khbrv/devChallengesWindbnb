import React from 'react';
import FilterForm from './FilterForm/FilterForm';
import FilterValues from './FilterValues/FilterValues';

function FilterExpanded({filterState, setFilterState}) {
  return (
    <div className="pageContainer--filter"> {/* for darkening */}
    <div className="contentContainer--filter">   {/* content */}   
      <span className="material-icons closeBtn" onClick={() => setFilterState(!filterState)}>
        close
      </span>
      <div className="container">
        <p className="filterTitle">Edit your search</p>
        <FilterForm />
        <FilterValues />         
      </div>
    </div>
    </div>
  );
}

export default FilterExpanded;