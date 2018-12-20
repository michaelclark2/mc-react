import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItems.scss';

class NavItems extends React.Component {
  render () {
    return (
      <ul className='NavItems navbar-list'>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  }
};

export default NavItems;
