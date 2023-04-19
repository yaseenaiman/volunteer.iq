import React from "react";
import "../style/style.css";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "../style/search.css";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBtn } from "mdb-react-ui-kit";
import NewCard from "./cards";
const HomePage = () => {
  return (
    <>
      <header>
        {/* Intro settings */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      #intro {\n        /* Margin to fix overlapping fixed navbar */\n        margin-top: 58px;\n      }\n      @media (max-width: 991px) {\n        #intro {\n          /* Margin to fix overlapping fixed navbar */\n          margin-top: 45px;\n        }\n      }\n    ",
          }}
        />

        {/* Navbar */}
        {/* Jumbotron */}

        {/* <div id="intro" className="p-5 text-center bg-light">
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
      Jumbotron */}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg?w=996&t=st=1681658760~exp=1681659360~hmac=91659e7b830a68c9f68bae6d15735d48dfd6a857673fb434d126cc6ecc7c6f70"
                className="d-block mx-lg-auto img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className="lc-block mb-3">
                <div editable="rich">
                  <h2 className="fw-bold display-5">
                    Responsive left-aligned hero with image
                  </h2>
                </div>
              </div>
              <div className="lc-block mb-3">
                <div editable="rich">
                  <p className="lead">
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end open
                    source toolkit, featuring Sass variables and mixins,
                    responsive grid system, extensive prebuilt components, and
                    powerful JavaScript plugins.
                  </p>
                </div>
              </div>
              <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  className="btn btn-primary px-4 me-md-2"
                  href="#"
                  role="button"
                >
                  Click me, I'm a button
                </a>
                <a
                  className="btn btn-outline-secondary px-4"
                  href="#"
                  role="button"
                >
                  Click me, I'm a button
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*Main Navigation*/}
      {/*Main layout*/}
      <main className="my-5">
        <div className="container">
          {/*Section: Content*/}
          <NewCard />
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
        <div className="container py-6">
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="lc-block mb-4">
                <div editable="rich">
                  <h2 className="fw-bold display-5">
                    Lorem ipsum dolor sit amet, consectetur.
                  </h2>
                </div>
              </div>
              <div className="lc-block mb-5">
                <div editable="rich">
                  <p className="lead text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse a lacus est. Etiam diam metus, lobortis non
                    augue at, placerat viverra risus. Cras ornare faucibus
                    laoreet.
                  </p>
                </div>
              </div>
              <div className="lc-block d-sm-flex align-items-center mb-4 overflow-hidden position-relative">
                <div className="d-inline-flex">
                  <div>
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      lc-helper="svg-icon"
                      className="text-success"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                      />
                    </svg>
                  </div>
                  <div className="ms-3 align-self-center" editable="rich">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lc-block d-sm-flex align-items-center mb-4">
                <div className="d-inline-flex">
                  <div>
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      lc-helper="svg-icon"
                      className="text-success"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                      />
                    </svg>
                  </div>
                  <div className="ms-3 align-self-center" editable="rich">
                    <p>Suspendisse a lacus est</p>
                  </div>
                </div>
              </div>
              <div className="lc-block d-sm-flex align-items-center mb-4">
                <div className="d-inline-flex">
                  <div>
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      lc-helper="svg-icon"
                      className="text-success"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                      />
                    </svg>
                  </div>
                  <div className="ms-3 align-self-center" editable="rich">
                    <p>Etiam diam metus, lobortis non augue at</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mt-md-0 col-md-6">
              <div className="lc-block px-4">
                {/*  If you want to remove px-4 please add overflow-hidden class to the section */}
                <div className="position-relative" data-path="0.0.0.1.0">
                  <div className="lc-block position-absolute top-0 end-0 w-100 h-100 bg-danger opacity-50 mt-4 me-4">
                    {" "}
                  </div>
                  <img
                    className="position-relative img-fluid"
                    src="https://images.unsplash.com/photo-1615471618985-97108e2ba478?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&ixlib=rb-1.2.1&q=80&w=1080&h=1080"
                    srcSet="https://img.freepik.com/free-vector/people-volunteering-donating-money-items_53876-59859.jpg?w=996&t=st=1681668713~exp=1681669313~hmac=d4a9a30f846fd24497c8fc3b585b0221ffe09afa30a833cdec9cbfeba745ae7c"
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    width={1080}
                    height={1080}
                    alt="Photo by Spacejoy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <section>
          <div
            className="d-flex container-fluid"
            lc-helper="background"
            style={{
              minHeight: "40vh",
              background:
                "url(https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1980&h=768&fit=crop&ixid=eyJhcHBfaWQiOjM3ODR9)  center / cover no-repeat",
            }}
          />
          <div
            className="container py-5 bg-light"
            style={{ marginTop: "-20vh" }}
          >
            <div className="row">
              <div className="col-md-12 text-center text-dark">
                <div className="lc-block">
                  <img
                    alt="logo"
                    className="img-fluid"
                    src="https://cdn.livecanvas.com/media/logos/logo-1.svg"
                    style={{ maxHeight: "10vh" }}
                  />
                  <div className="lc-block ">
                    <div editable="rich">
                      <h2>Company Slogan</h2>
                    </div>
                  </div>
                  {/* /lc-block */}
                </div>
                {/* /lc-block */}
                <div className="lc-block text-center">
                  <div editable="rich">
                    <p> Copyright © My Company 2020</p>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="d-flex col-md-12 justify-content-center">
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.facebook.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                    </svg>
                  </a>
                </div>
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.pinterest.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
                    </svg>
                  </a>
                </div>
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.linkedin.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </div>
                <div className="lc-block text-center text-dark py-5 mx-2">
                  <a
                    className="text-decoration-none"
                    href="https://www.instagram.com/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="2em"
                      height="2em"
                      lc-helper="svg-icon"
                      fill="currentColor"
                    >
                      <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default HomePage;
