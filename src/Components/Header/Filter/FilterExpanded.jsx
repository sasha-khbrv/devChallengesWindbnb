import React from 'react';
function FilterExpanded({filterState, setFilterState}) {
  return (
    <div className="filterPageContainer">
    <div className="filterContentContainer">
    <div className="container">
          <div className="filterContainer filterContainer-full">
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
          </div>

          <div className="filterValue filterContainer-full">
            <div className="filterItem">
              <ul className="cityList">
                <li>Helsinki, Finland</li>
                <li>Turku, Finland</li>
                <li>Oulu, Finland</li>
                <li>Vaasa, Finland</li>
              </ul>
            </div>
            <div className="filterItem guestsContainer">
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
            <div className="filterItem"></div>
          </div>
    </div>
    </div>
    </div>
  );
}

export default FilterExpanded;