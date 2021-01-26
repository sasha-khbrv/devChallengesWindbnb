import React from 'react';
import FilterForm from './FilterForm/FilterForm';
import FilterValues from './FilterValues/FilterValues';

function FilterExpanded({
  stays, 
  filterState, setFilterState, 
  fieldActive, setFieldActive, 
  adultGuests, setAdultsCount, 
  kids, setKidsCount, 
  sumOfGuests,
  location, setLocation,
  setCardsFilter
}) {
  return (
    <div className="pageContainer--filter"> {/* for darkening */}
    <div className="contentContainer--filter">   {/* content */}   
      <span className="material-icons closeBtn" onClick={() => setFilterState(!filterState)}>
        close
      </span>
      <div className="container">
        <p className="filterTitle">Edit your search</p>
        <FilterForm 
          fieldActive={fieldActive}
          setFieldActive={setFieldActive}
          sumOfGuests={sumOfGuests}
          location={location}
          setCardsFilter={setCardsFilter}
          filterState={filterState}
          setFilterState={setFilterState}
        />
        <FilterValues 
          fieldActive={fieldActive}
          stays={stays}
          setLocation={setLocation}
          adultGuests={adultGuests}
          setAdultsCount={setAdultsCount}
          kids={kids}
          setKidsCount={setKidsCount}
        />         
      </div>
    </div>
    </div>
  );
}

export default FilterExpanded;