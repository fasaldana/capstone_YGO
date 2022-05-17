import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
      className: ({ isActive }) => (isActive ? 'active' : ''),
    },
    {
      id: 2,
      path: '/details',
      className: ({ isActive }) => (isActive ? 'active missions' : 'missions'),
      text: 'Details',
    },
  ];
  return (
    <nav>
      <div className="logo-container">logo</div>
      <ul className="right-links">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className={link.className} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
