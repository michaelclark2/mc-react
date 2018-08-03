import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render () {
    return (
      <nav className="Header">
        <h1>Michael Clark</h1>
        <ul className="navbar-list">
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
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
