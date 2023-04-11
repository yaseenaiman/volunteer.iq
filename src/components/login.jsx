import React, { useState } from 'react';
import '../style/style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <div className="container">
      <h2>Log In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

        <button type="submit" className="btn">Log In</button>
      </form>
    </div>
  );
};

export default Login;
