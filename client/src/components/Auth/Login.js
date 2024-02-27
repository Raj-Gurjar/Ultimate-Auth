import React, { useState } from 'react'
import './Auth.scss'


export default function Login() {

  const [logInData, setLogInData] = useState({
    logInUser: "", logInPass: ""
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

  function submitHandler(event) {
    event.preventDefault();
    alert('LogIn data Submitted');
    console.log(" Form whole Data: ", logInData);
  }

  return (
    <div className='log-cls'>
      <form action="" onSubmit={submitHandler} className='auth-form'>

        <label>
          Username/Email
          <input type="text"
            name='logInUser'
            placeholder='raj29/raj13@gmail.com'
            value={logInData.logInUser}
            onChange={logFormHandler} />
        </label>

        <label>
          Password
          <input type="password"
            name='logInPass'
            value={logInData.logInPass}
            onChange={logFormHandler} />
        </label>

        <input type='submit' value='submit' />
      </form>
    </div>
  )
}
