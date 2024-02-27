import React, { useState } from 'react'
import './Auth.scss'
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';

export default function SignUp() {

  const [role, setRole] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "", middleName: "", lastName: "", email: "", userName: "", password: "", confPassword: "",
    dob: "", gender: "", phoneNo: "", country: "", address: "", profilePic: "", securityQue: "", securityAns: "",
    tnc: false, captchaInp: ""
  });



  console.log(formData);


  function formHandler(event) {

    const { name, value, checked, type } = event.target
    //! For using controlled component we extracted all the arguments.

    setFormData(prevFormData => {

      return {
        ...prevFormData, //storing the previous state of form.

        //! Using Controlled Components (we can tract the data of single component individually)

        [name]: type === "checkbox" ? checked : value
        //see the type of (name),if it is a checkbox then send checked in name(name = checked) otherwise send name = value
      }


    })
  }
  //! Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted Successfully');
    console.log(" Form whole Data: ", formData);

  }

  function captChange(value) {
    console.log("Captcha value:", value);
  }



  return (
    <div className='log-cls'>
      <h2>Register Here</h2>

      <div className="reg-option">
        <h3>Register as</h3>
        <button onClick={() => setRole(true)}>Customer</button>
        <button onClick={() => setRole(false)}>Admin</button>

        {/* Add an admin id input which is given by company in case of admin is selected */}
      </div>
      <form action="" className='auth-form' onSubmit={handleSubmit}>
        <h4>Register as {role === true ? 'Customer' : 'Admin'} {formData.firstName}</h4>

        {/* 
        {role === false &&
          <label>
            Admin ID:

            <input type="text"
              placeholder='RA123'
              name='adminID'
              value={formData.adminID}
              onChange={formHandler}
              required />
            <span>Know More</span>
       
          </label>

        } */}

        <label>
          First Name*:
          <input type="text"
            placeholder='Raj'
            name='firstName'
            value={formData.firstName}
            onChange={formHandler}
            required />
        </label>

        <label>
          Middle Name:
          <input type="text"
            placeholder='Kumar'
            name='middleName'
            value={formData.middleName}
            onChange={formHandler}
            required
          />
        </label>

        <label>
          Last Name*:
          <input type="text"
            name='lastName'
            placeholder='Chhalotre'
            value={formData.lastName}
            onChange={formHandler}
            required />
        </label>


        <label>
          Email:
          <input type="email"
            name="email"
            placeholder='raj13@gmail.com'
            value={formData.email}
            onChange={formHandler}
            required />
        </label>

        <label>
          UserName
          <input type="text"
            placeholder='raj29'
            name='userName'
            value={formData.userName}
            onChange={formHandler}
            required />
        </label>


        <label>
          Password
          <input type="password"
            name='password'
            value={formData.password}
            onChange={formHandler}
            required />
        </label>

        <label>
          Confirm Password
          <input type="password"
            name='confPassword'
            value={formData.confPassword}
            onChange={formHandler}
            required />
        </label>

        <label>
          DOB
          <input type="date"
            name="dob"
            value={formData.dob}
            onChange={formHandler}
          />
        </label>
        <fieldset>
          <legend>Gender</legend>
          <input type='radio'
            name="gender"
            value='male'
            checked={formData.gender === 'male'}
            onChange={formHandler}
            id='male'
          />
          <label htmlFor="male">Male</label>

          <input type='radio'
            name="gender"
            value='female'
            checked={formData.gender === 'female'}
            onChange={formHandler}
            id='female'
          />
          <label htmlFor="female">Female</label>

          <input type='radio'
            name="gender"

            value="Other"
            checked={formData.gender === 'other'}
            onChange={formHandler}
            id='other'
          />
          <label htmlFor="other">Other</label>


        </fieldset>






        <label>
          Phone No.
          <input type="number"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={formHandler} />
        </label>

        <label>
          Country
          <input type="text"
            name="country"
            value={formData.country}
            onChange={formHandler} />
        </label>

        <label>
          Address
          <input type="text"
            name="address"
            value={formData.address}
            onChange={formHandler} />
        </label>

        <label>
          Profile Pic
          <input type="file"
            name="profilePic"
            value={formData.profilePic}
            onChange={formHandler} />
        </label>

        <label>
          Security Que
          <select
            name="securityQue"
            value={formData.securityQue}
            onChange={formHandler} >
            <option value="q1">q1</option>
            <option value="q2">q2</option>
            <option value="q3">q3</option>
            <option value="q4">q4</option>
            <option value="q5">q5</option>
          </select>
        </label>

        <label>
          Security Ans
          <input type="text"
            name="securityAns"
            value={formData.securityAns}
            onChange={formHandler} />
        </label>

        <fieldset>


          <input type="checkbox"
            name="tnc"
            checked={formData.tnc}
            onChange={formHandler}
            id='tnc'
            required />

          <label htmlFor='tnc'>
            T&C Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, distinctio!
          </label>
        </fieldset>


        <ReCAPTCHA
          sitekey="6LfkvoApAAAAAGkshKOVgSUTUruhPSoqDfMhToSQ"
          onChange={captChange}


        //TODO make it required
        />

        <Link to='/showData'>
          <input type="submit" value="Submit" />
        </Link>



      </form>
    </div >
  )
}
