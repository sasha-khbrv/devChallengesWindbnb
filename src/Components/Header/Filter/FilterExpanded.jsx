import React from 'react';
import Guests from './Guests/Guests';
import CityList from './CityList/CityList';
import FilterForm from './FilterForm/FilterForm';

function FilterExpanded({filterState, setFilterState}) {
  return (
    <div className="filterPageContainer"  >
    <div className="filterFormContainer">
      <span className="material-icons closeBtn" onClick={() => setFilterState(!filterState)}>
        close
      </span>
    <div className="container">
          {/* <div className="filterContainer filterContainer-full" >
            <div className="filterItem filterBtn-left">
              <button className="btn btnTitle">
                <span className="buttonHelperText">Location</span>
                Helsinki, Finland
              </button>
            </div>
            <div className="filterItem filterBtn-center">
              <button className="btn btnPlaceholder btnTitle">
                <span className="buttonHelperText">Guests</span>
                Add guests
              </button>
            </div>
            <div className="filterItem filterBtn-right">
              <button className="btn btnSolid">
                <span className="material-icons">search</span>
                Search
              </button>
            </div>      
          </div> */}
          <FilterForm />
          <div className="filterValue filterContainer-full">
            <div className="filterItem">
              <CityList />
            </div>
            <div className="filterItem">
              <Guests />
            </div>
            <div className="filterItem"></div>
          </div>
    </div>
    </div>
    </div>
  );
}

export default FilterExpanded;