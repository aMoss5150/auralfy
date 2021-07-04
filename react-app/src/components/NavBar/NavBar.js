import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="flex">
        <li className="mr-6 nav__element">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="mr-6 nav__element">
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="mr-6 nav__element">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li className="mr-6 nav__element">
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li className="mr-6 nav__element">
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;