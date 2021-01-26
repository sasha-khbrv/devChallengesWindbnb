import React from 'react';
import Logo from './Logo/Logo';
import FilterCollapsed from './Filter/FilterCollapsed';
import FilterExpanded from './Filter/FilterExpanded';

function Header(props) {
  return (
    <header className="headerContainer">
      { props.filterState && <FilterExpanded 
                          stays={props.stays}
                          filterState={props.filterState}
                          setFilterState={props.setFilterState}
                          fieldActive={props.fieldActive}
                          setFieldActive={props.setFieldActive}                          
                          location={props.location}
                          setLocation={props.setLocation}
                          adultGuests={props.adultGuests}
                          setAdultsCount={props.setAdultsCount}
                          kids={props.kids}
                          setKidsCount={props.setKidsCount}
                          sumOfGuests={props.sumOfGuests}
                          setCardsFilter={props.setCardsFilter}
      /> }
      <Logo />
      <FilterCollapsed 
        filterState={props.filterState}
        setFilterState={props.setFilterState}
        fieldActive={props.fieldActive}
        setFieldActive={props.setFieldActive}
        location={props.location}
        sumOfGuests={props.sumOfGuests}
        setCardsFilter={props.setCardsFilter}
      /> 
    </header>
  );
}

export default Header;