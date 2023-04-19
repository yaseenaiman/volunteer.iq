import React from 'react';
import '../style/style.css';
import { getUsers } from "../api/api";
import NewCard from './newCard';

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
         Specific Contributions
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
       <NewCard />
         
           
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
