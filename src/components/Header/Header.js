import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render () {
    return (
      <nav className="Header">
        <h1><Link to="/">Michael Clark</Link></h1>
        <ul className="navbar-list">
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Header;
