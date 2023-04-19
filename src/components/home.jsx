import React from 'react';
import '../style/style.css';

const Home = () => {
  return (
    <div className="container-fluid px-4 py-5 my-5 text-center">
      <div className="lc-block mb-4">
        <div editable="rich">
          <h2 className="display-2 fw-bold">
            Welcome vistor <span className="text-danger"> To Volunteer</span>
          </h2>
        </div>
      </div>
      <div className="lc-block col-lg-6 mx-auto mb-5">
        <div editable="rich">
          <p className="lead">
            start a new journey in volunteer and helping people 
          </p>
        </div>
      </div>
      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        {" "}
        <a
          className="btn btn-primary btn-lg px-4 gap-3"
          href="/login"
          role="button"
        >
          Login
        </a>
        <a
          className="btn btn-outline-danger btn-lg px-4"
          href="/register"
          role="button"
        >
          Register
        </a>
      </div>
      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
        <img
          className="img-fluid"
          src="https://img.freepik.com/premium-vector/volunteering-volunteer-organization-collects-humanitarian-aid-volunteers-are-holding-letters_491047-317.jpg?w=1060"
          width=""
          height={783}
          srcSet=""
          sizes=""
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
