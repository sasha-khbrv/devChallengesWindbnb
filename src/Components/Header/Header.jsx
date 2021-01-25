import React, { useState } from 'react';
import Logo from './Logo/Logo';
import FilterCollapsed from './Filter/FilterCollapsed';
import FilterExpanded from './Filter/FilterExpanded';


function Header() {
  const [filterState, setFilterState] = useState(true);
   

  return (
    <header className="headerContainer">
      {filterState && <Logo /> }
      {
        filterState 
          ? <FilterCollapsed filterState={filterState} setFilterState={setFilterState}/> 
          : <FilterExpanded filterState={filterState} setFilterState={setFilterState}/> 
      } 
    </header>
  );
}

export default Header;