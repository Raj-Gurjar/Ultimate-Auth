import React, { useContext, useState } from 'react'
import './Navbar.scss';
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
import toast from 'react-hot-toast';




export default function Navbar() {

  const { isLoggedIn, setIsLoggedIn, userType, setUserType } = useContext(GlobalContext);

  const [dorpDown, setDropDown] = useState(false);
  console.log('dropDown:', dorpDown);

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
      
            {/* DropDown */}
            <li>
              <button onClick={() => (setDropDown(!dorpDown))}><RxAvatar /></button>
              {
                (dorpDown) &&

                <div className="dropdown flex flex-col">
                  <ul className='flex flex-col gap-4'>
                    {(!isLoggedIn) &&
                      <>
                        <li onClick={() => setUserType(false)}>
                          <Link to='/login' >Customer</Link>
                        </li>

                        <li onClick={() => setUserType(true)}>
                          <Link to='/login'>Admin</Link>
                        </li>
                      </>
                    }
                    {
                      (isLoggedIn) &&
                      <>
                        <li>
                          <Link to={`/users/${userType ? 'admin' : 'customer'}/dashboard`}>{userType ? 'Admin':'Customer'} DashBoard</Link>
                        </li>

                        <li>
                          <Link to={`/users/profile`}>{userType ? 'Admin':'Customer'} Profile</Link>
                        </li>

                        <li onClick={() => setUserType(true)}>
                          <Link to='/' onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Logged Out')
                          }}>
                            <button>Log Out</button>
                          </Link>
                        </li>
                      </>
                    }
                  </ul>

                </div>
              }

            </li>

            <li>
              <NavLink to='/users/profile'>User Profile</NavLink>
            </li>



          </ul>
        </div>
      </div>
    </div >
  )
}
