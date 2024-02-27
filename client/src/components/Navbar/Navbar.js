import React from 'react'
import './Navbar.scss';
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';




export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <div className='nav-logo'>
          Logo
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/users/admin'>Admin</NavLink>
            </li>
            <li>
              <NavLink to='/users/customer'>Customer</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Signup</NavLink>
            </li>
            <li>
              <NavLink to='/showData'>ShowData</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
