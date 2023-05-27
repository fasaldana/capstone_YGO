import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      {location.pathname === '/' ? null : <NavLink to="/"><i className="fa-solid fa-angle-left" /></NavLink>}
      <ul className="title">
        <li>
          Yu Gi Oh!
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
