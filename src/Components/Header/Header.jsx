import React from 'react';
import Logo from './Logo/Logo';
import FilterCollapsed from './Filter/FilterCollapsed';
import FilterExpanded from './Filter/FilterExpanded';


function Header({filterState, setFilterState}) {
  return (
    <header className="headerContainer">
      <FilterExpanded filterState={filterState} setFilterState={setFilterState}/>
      {/* { filterState && <FilterExpanded filterState={filterState} setFilterState={setFilterState}/> } */}
      <Logo />
      <FilterCollapsed filterState={filterState} setFilterState={setFilterState}/> 
    </header>
  );
}

export default Header;