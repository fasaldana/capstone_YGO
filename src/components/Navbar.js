import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <i className="fa-solid fa-angle-left">
      <NavLink to="/" />
    </i>
    <ul className="title">
      <li>
        Yu Gi Oh!
      </li>
    </ul>
    <div className="nav-options">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </nav>
);

export default Navbar;
