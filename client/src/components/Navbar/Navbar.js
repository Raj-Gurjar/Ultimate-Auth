import React, { useContext } from 'react'
import './Navbar.scss';
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
import toast from 'react-hot-toast';




export default function Navbar() {

  const { isLoggedIn, setIsLoggedIn, userType, setUserType } = useContext(GlobalContext);
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
            {!isLoggedIn &&
              <>
                <li>
                  <NavLink to='/login'>Login</NavLink>
                </li>

                <li>
                  <NavLink to='/signup'>Signup</NavLink>
                </li>
              </>
            }
            {isLoggedIn &&
              <Link to='/' onClick={ () =>
              {
                setIsLoggedIn(false);
                toast.success('Logged Out')
              }}>
                <button>Log Out</button>
              </Link>
            }
            <li>
              <NavLink to='/showData'>ShowData</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
