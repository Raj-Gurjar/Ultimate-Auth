import React, { useState } from 'react'
import './Auth.scss'
import ReCAPTCHA from 'react-google-recaptcha';

export default function SignUp() {
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

        //? [event.target.name]: event.target.value
        //adding in the previous state
        //for normal form handling we use above syntax(by this we are storing the whole data at a time , not of a single component).

        //! Using Controlled Components (we can tract the data of single component individually)

        [name]: type === "checkbox" ? checked : value
        //if it is a checkbox then send checked in name(name = checked) otherwise send name = value
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
      <form action="" className='auth-form' onSubmit={handleSubmit}>
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

        <label>
          Gender
          <select
            name="gender"
            value={formData.gender}
            onChange={formHandler}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>

          </select>
        </label>

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
            value={formData.tnc}
            onChange={formHandler}
            required />

          <label htmlFor='tnc'>
            T&C Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, distinctio!
          </label>
        </fieldset>



        {/* <label>
          Captcha
          <input type="text"
            name="captchaInp"
            value={formData.captchaInp}
            onChange={formHandler}
            required />
        </label> */}

        <ReCAPTCHA
          sitekey="6LfkvoApAAAAAGkshKOVgSUTUruhPSoqDfMhToSQ"
          onChange={captChange}


        //TODO make it required
        />
        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}
