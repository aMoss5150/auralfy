import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useColor } from '../../context/ColorContext'
import logo1 from '../../images/auralfy-light.jpg'
import "./NavBar.css"

const NavBar = () => {
  const { colorCtxt, setColorCtxt } = useColor()
  const [open, setOpen] = useState(false)


  return (
    <nav className={`navbar mr-6 nav__element ${colorCtxt === false ? "headers__colors2" : 'headers__colors4'}`}>
      <i className="icons fas fa-sign-out-alt" onClick={() => setOpen(!open)}></i>
      {/* <button className='ml-2 mt-2' onClick={() => setOpen(!open)}> {open ? '-' : '+'}</button> */}
      {open &&
        <ul className="flex ">

          <li className={`ml-2 mt-1 nav__element ${colorCtxt === false ? "headers__colors2" : 'headers__colors4'}`}>
            <LogoutButton />
          </li>
        </ul>
      }
      <span className={`m-2 ml-12 fromalbum font-thin logo__span ${open ? "hidden" : ""}`}>Auralfy</span>
      {/* <img src={logo1} className="mainlogo" alt="" /> */}
      <span className={`hidden ml-6 ${open ? "hidden" : ""}`}>
        <button onClick={() => setColorCtxt(false)} >green</button>
      </span>
      <span className={`hidden ml-6 ${open ? "hidden" : ""}`}>
        <button onClick={() => setColorCtxt(true)} >red</button>
      </span>
    </nav>
  );
}

//  <li className="mr-6 nav__element headers__colors2">
//             <NavLink to="/" exact={true} activeClassName="active">
//               Home
//             </NavLink>
//           </li>
//           <li className="mr-6 nav__element headers__colors2">
//             <NavLink to="/login" exact={true} activeClassName="active">
//               Login
//             </NavLink>
//           </li>
//           <li className="mr-6 nav__element headers__colors2">
//             <NavLink to="/sign-up" exact={true} activeClassName="active">
//               Sign Up
//             </NavLink>
//           </li>
//           <li className="mr-6 nav__element headers__colors2">
//             <NavLink to="/users" exact={true} activeClassName="active">
//               Users
//             </NavLink>
//           </li>

export default NavBar;