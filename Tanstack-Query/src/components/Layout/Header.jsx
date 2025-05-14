import React from 'react';
import { NavLink } from 'react-router-dom';  // ✅ Correct import

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Sheur Tanstack Query</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trad">Fetch Old</NavLink>
          </li>
          <li>
            <NavLink to="/rq">Fetch RQ</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
