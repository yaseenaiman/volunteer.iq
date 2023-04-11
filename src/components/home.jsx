import React from 'react';
import '../style/style.css';

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>Welcome to our Volunteer Initiative Website</h1>
        <p>Join us in making a difference in the world.</p>
        <div className="cta">
          <a href="/login" className="btn">Log In</a>
          {/* <a href="/registration" className="btn btn-secondary">Register</a> */}
          <a href="/register" className="btn btn-secondary">Register</a>

        </div>
      </div>
    </div>
  );
};

export default Home;
