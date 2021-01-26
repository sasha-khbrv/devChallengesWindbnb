import React from 'react';

function CityList({stays, setLocation}) {
  //Took all cities from API/stays.json
  const cityItem = [...new Set(stays.map(item => item.location))]
    .map((city, index) => <li key={index} onClick={() => setLocation(city)}>{city}</li>)
  
  return (
    <div className="filterItem">
      <ul className="cityList">
        {cityItem}
      </ul>
    </div>
  );
}

export default CityList;