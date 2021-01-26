import React from 'react';
import CityList from './CityList/CityList';
import Guests from './Guests/Guests';

function FilterValues({filterState, setFilterState}) {
  return (      
    <div className="filterContent filterValue">
        <CityList />
        <Guests />
      <div className="filterItem"></div>
    </div>
  );
}

export default FilterValues;