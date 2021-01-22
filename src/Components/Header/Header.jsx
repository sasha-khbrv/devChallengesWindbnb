import React from 'react';
import Logo from './Logo/Logo';
import Filter from './Filter/Filter';

function Header() {
  return (
    <header className="headerContainer">
      <Logo />
      <Filter />
    </header>
  );
}

export default Header;