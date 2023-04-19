import React from "react";
import "../style/navbar.css";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-scroll shadow-0"
      style={{ backgroundColor: " " }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          VOLUNTEER
        </a>
        <button
          className="navbar-toggler ps-0"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="d-flex justify-content-start align-items-center">
            <i className="fas fa-bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!">
                Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/aboutus">
                about us
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link px-3" href="#!">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!"></a>
            </li>
          </ul>
          <ul className="navbar-nav flex-row">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#!"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="#!">
                <i className="fab fa-instagram" />
                <button class="btn-hover color-9">SIGN IN </button>
              </a>
            </li>
          </ul>
        </div>

        <button class="btn-hover color-8">SIGN IN </button>
        <br></br>
      </div>
    </nav>
  );
}

export default Navbar;