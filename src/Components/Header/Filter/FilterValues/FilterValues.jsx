import React from 'react';
import CityList from './CityList/CityList';
import Guests from './Guests/Guests';

function FilterValues({stays, fieldActive, setLocation, adultGuests, setAdultsCount, kids, setKidsCount}) {
  return (      
    <div className="filterContent filterValue">
      <div className="filterItem">
        {
          (fieldActive === 'location') 
            ? <CityList 
              stays={stays}
              setLocation={setLocation}/> 
            : null
        }        
      </div>
      <div className="filterItem">
        {
          (fieldActive === 'guests') 
            ? <Guests 
              adultGuests={adultGuests} 
              setAdultsCount={setAdultsCount}
              kids={kids}
              setKidsCount={setKidsCount}
            /> 
            : null
        }         
      </div>        
      <div className="filterItem"></div>
    </div>
  );
}

export default FilterValues;