import React, { useState } from 'react';
import '../style/style.css';

import logo from './images/logo.jpg';
import registerImg from './images/register.jpg';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName} Last Name: ${lastName} Email: ${email} Password: ${password} Gender: ${gender}`);
  };

  return (
    <div className="registration-page">
      <div className="registration-form-container">
        <img src={logo} alt="Logo" className="logo" />

        <h2>Register</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <label htmlFor="gender">Gender</label>
          <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>

          <button type="submit" className="btn">Register</button>
        </form>
      </div>

      <img src={registerImg} alt="Registration" className="registration-img" />
    </div>
  );
};

export default Registration;
