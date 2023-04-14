import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/style.css";

// Request on Client

function Login() {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });
const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.user));
       e.preventDefault();
       try {
         // Perform login request here...
         // If login is successful, redirect to home page
         navigate("/homepage");
       } catch (error) {
         console.error(error);
       }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  

  return (
    <div className="container">
      <h2>Log In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;