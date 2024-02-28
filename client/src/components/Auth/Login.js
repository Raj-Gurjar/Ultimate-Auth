import React, { useContext, useState } from 'react'
import './Auth.scss'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';

export default function Login() {

  const { userType, setUserType, setIsLoggedIn, logInApi } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [logInData, setLogInData] = useState({
    userName: "", password: "", isAdmin: userType
  })
  console.log(logInData);

  function logFormHandler(event) {
    const { name, value, checked, type } = event.target

    setLogInData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    });
  }

  async function loginHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${logInApi}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInData),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log('LogIn response:', res_data);

        setIsLoggedIn(true);
        toast.success('LogIn data Submitted');
        navigate('/users/admin');
      }
      else {
        const errorMessage = await response.json();
        toast.error(`Login failed: ${errorMessage.message}`);
      }
    }
    catch (error) {
      console.error('Error during Login:', error);

    }

    return (
      <div className='log-cls'>

        <h2>Register Here</h2>

        <div className="reg-option">
          <h3>Login as</h3>
          <button onClick={() => setUserType(true)}>Customer</button>
          <button onClick={() => setUserType(false)}>Admin</button>

          {/* Add an admin id input which is given by company in case of admin is selected */}
        </div>
        <form action="" onSubmit={loginHandler} className='auth-form'>
          <h4>Register as {userType === true ? 'Customer' : 'Admin'}</h4>
          <label>
            Username/Email
            <input type="text"
              name='userName'
              placeholder='raj29/raj13@gmail.com'
              value={logInData.userName}
              onChange={logFormHandler} />
          </label>

          <label>
            Password
            <input type="password"
              name='password'
              value={logInData.password}
              onChange={logFormHandler} />
          </label>

          <h3>forgot Password ?</h3>
          <input type='submit' value='submit' />

          <h4>Don't Have an Account ? <Link to='/signup'>Register</Link></h4>
        </form>
      </div>
    )
  }
}