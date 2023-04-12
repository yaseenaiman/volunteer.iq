import React from 'react';
import '../style/style.css';

const HomePage = () => {
  return (
    <>
  <header>
    {/* Intro settings */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      #intro {\n        /* Margin to fix overlapping fixed navbar */\n        margin-top: 58px;\n      }\n      @media (max-width: 991px) {\n        #intro {\n          /* Margin to fix overlapping fixed navbar */\n          margin-top: 45px;\n        }\n      }\n    "
      }}
    />
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        {/* Navbar brand */}
        <a
          className="navbar-brand"
          target="_blank"
          href="https://mdbootstrap.com/docs/standard/"
        >
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            height={16}
            alt=""
            loading="lazy"
            style={{ marginTop: "-3px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow"
                target="_blank"
              >
Help Your Community
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
              >
                 Need Help
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            {/* Icons */}
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.facebook.com/mdbootstrap"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://twitter.com/MDBootstrap"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Navbar */}
    {/* Jumbotron */}
    <div id="intro" className="p-5 text-center bg-light">
      <h1 className="mb-3 h2">MAKE YOUR COMMUNITY BETTER</h1>
      <p className="mb-3">Volunteer Now</p>
      <a
        className="btn btn-primary m-2"
        href="https://www.youtube.com/watch?v=c9B4TPnak1A"
        role="button"
        rel="nofollow"
        target="_blank"
      >
         Specific Contributions?
      </a>
      <a
        className="btn btn-primary m-2"
        href="https://mdbootstrap.com/docs/standard/"
        target="_blank"
        role="button"
      >
        Need Help?
      </a>
    </div>
    {/* Jumbotron */}
  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <main className="my-5">
    <div className="container">
      {/*Section: Content*/}
      <section className="text-center">
        <h4 className="mb-5">
          <strong>Latest posts</strong>
        </h4>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                   src={require('../api/posts/images/river.jpg')} alt="house"

                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Clean The River Bank in Jadria</h5>
                <p className="card-text">
                  You are going to be part of a large number of wonderful people, even small efforts are appreciated!
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                    src={require('../api/posts/images/tree.jpg')} alt="house"

                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Plant a Tree</h5>
                <p className="card-text">
                  Contribute to our great mission to plant over 2 million trees by 2o25
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={require('../api/posts/images/house.jpg')} alt="house"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Buidling a house for an old man</h5>
                <p className="card-text">
                 An old man who used to be a teacher but he now has no money to build his house. 
                 More than 10 people are working daily, be part of them!
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/002.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/022.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/035.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section: Content*/}
      {/* Pagination */}
      <nav className="my-4" aria-label="...">
        <ul className="pagination pagination-circle justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
  {/*Main layout*/}
  {/*Footer*/}
  <footer className="bg-light text-lg-start">
    <div className="py-4 text-center">
      <a
        role="button"
        className="btn btn-primary btn-lg m-2"
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
        rel="nofollow"
        target="_blank"
      >
        Learn Bootstrap 5
      </a>
      <a
        role="button"
        className="btn btn-primary btn-lg m-2"
        href="https://mdbootstrap.com/docs/standard/"
        target="_blank"
      >
        Download MDB UI KIT
      </a>
    </div>
    <hr className="m-0" />
    <div className="text-center py-4 align-items-center">
      <p>Follow MDB on social media</p>
      <a
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.facebook.com/mdbootstrap"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/MDBootstrap"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://github.com/mdbootstrap/mdb-ui-kit"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/*Footer*/}
</>

  );
};

export default HomePage;
