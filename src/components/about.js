import React, { Component } from "react";
import "./about.css";
import ButtonRedirect from "../API/button";
class Sam extends Component {
  state = {};

  render() {
    return (
      <div>
        <>
        
        
          <div className="container py-4">
            <div className="row">
              <div className="col-md-3">
                <div className="lc-block">
                  <div editable="rich">
                    <h1>About Us</h1>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
              <div className="col-md-5">
                {/* /lc-block */}
                <div className="lc-block">
                  <div editable="rich">
                    <p>
                      {" "}
                    we are group of creative path who wanted to create a website and help students to practice english
                    through our special courses and exams by the most creative english teachers  
                    </p>
                    <p>
                      
                    </p>
                  </div>
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
              <div className="col-md-4">
                <div className="lc-block">
                  <img
                    className="img-fluid"
                    src="https://cdn.livecanvas.com/media/svg/manypixels/looking_for_idea_with_team.svg"
                    alt=""
                  />
                </div>
                {/* /lc-block */}
              </div>
              {/* /col */}
            </div>
          </div>
          <>
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
            />
            {/* lc-needs-hard-refresh */}
            <div className="container py-6">
              <div className="row align-items-center py-2">
                <div className="col-xl-4 mb-5 text-center text-xl-start">
                  <div className="lc-block mb-3">
                    <div editable="rich">
                      <h2 className="fw-bold display-6">Our Clients say...</h2>
                    </div>
                  </div>
                  <div className="lc-block mb-4">
                    <div editable="rich">
                      <p className="fw-light rfs-10">
                        Customers are Awesome. Check what our clients are saying
                        about us.
                      </p>
                    </div>
                  </div>
                  <div className="lc-block">
                    <a className="btn btn-primary" href="#" role="button">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 position-relative">
                  <img
                    src="https://cdn.livecanvas.com/media/svg/fffuel/svg-shape-11.svg"
                    width={256}
                    height={256}
                    srcSet=""
                    sizes=""
                    alt="Made by fffuel.com"
                    className="d-none d-xl-block position-absolute top-100 start-0 translate-middle mt-n5 wp-image-2412"
                    loading="lazy"
                  />
                  {/* Slider main container */}
                  <div className="swiper mySwiper position-relative swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    {/* Additional required wrapper */}
                    <div
                      className="swiper-wrapper mb-5"
                      style={{
                        cursor: "grab",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                      id="swiper-wrapper-31e39ed100f39760a"
                      aria-live="polite"
                    >
                      {/* Slides */}
                      <div
                        className="swiper-slide lc-block swiper-slide-active"
                        role="group"
                        aria-label="1 / 3"
                        style={{ width: 856 }}
                      >
                        <div className="row row-cols-1 row-cols-lg-2 g-4">
                          <div className="col">
                            <div className="card p-3">
                              <div className="card-body">
                                <div className="lc-block mb-4">
                                  <div editable="rich">
                                    <p>
                                      <em className="rfs-8 text-muted">
                                        {" "}
                                     they have the best english courses.&nbsp;
                                      </em>
                                    </p>
                                  </div>
                                </div>
                                <div className="lc-block d-inline-flex">
                                  <div
                                    className="lc-block me-3"
                                    style={{ minWidth: 72 }}
                                  >
                                    <img
                                      className="img-fluid rounded-circle "
                                      src="https://i.pravatar.cc/96?img=5"
                                      width={72}
                                      height={72}
                                    />
                                  </div>
                                  <div className="lc-block">
                                    <div editable="rich">
                                      <p className="h5">Leah H. Middaugh</p>
                                      <p className="text-muted">
                                       Art student &nbsp;
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card p-3">
                              <div className="card-body">
                                <div className="lc-block mb-4">
                                  <div editable="rich">
                                    <p>
                                      <em className="rfs-8 text-muted">
                                        {" "}
                                       i know english but i wnated to practice more their course were to helpful.&nbsp;
                                      </em>
                                    </p>
                                  </div>
                                </div>
                                <div className="lc-block d-inline-flex">
                                  <div
                                    className="lc-block me-3"
                                    style={{ minWidth: 48 }}
                                  >
                                    <img
                                      className="img-fluid rounded-circle "
                                      src="https://i.pravatar.cc/96?img=7"
                                      width={64}
                                      height={64}
                                    />
                                  </div>
                                  <div className="lc-block">
                                    <div editable="rich">
                                      <p className="h5">
                                        salim. Collinsworth
                                      </p>
                                      <p className="text-muted">
                                       graphic designer 
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide lc-block swiper-slide-next"
                        role="group"
                        aria-label="2 / 3"
                        style={{ width: 856 }}
                      >
                        <div className="row row-cols-1 row-cols-lg-2 g-4">
                          <div className="col">
                            <div className="card p-3">
                              <div className="card-body">
                                <div className="lc-block mb-4">
                                  <div editable="rich">
                                    <p>
                                      <em className="rfs-8 text-muted">
                                        {" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc et metus id ligula
                                        malesuada placerat sit amet quis enim.
                                        Aliquam erat volutpat. In pellentesque
                                        scelerisque auctor.&nbsp;
                                      </em>
                                    </p>
                                  </div>
                                </div>
                                <div className="lc-block d-inline-flex">
                                  <div
                                    className="lc-block me-3"
                                    style={{ minWidth: 72 }}
                                  >
                                    <img
                                      className="img-fluid rounded-circle "
                                      src="https://i.pravatar.cc/96?img=26"
                                      width={72}
                                      height={72}
                                    />
                                  </div>
                                  <div className="lc-block">
                                    <div editable="rich">
                                      <p className="h5">Amber E. Smith</p>
                                      <p className="text-muted">
                                        Patient educator&nbsp;
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card p-3">
                              <div className="card-body">
                                <div className="lc-block mb-4">
                                  <div editable="rich">
                                    <p>
                                      <em className="rfs-8 text-muted">
                                        {" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc et metus id ligula
                                        malesuada placerat sit amet quis enim.
                                        Aliquam erat volutpat. In pellentesque
                                        scelerisque auctor.&nbsp;
                                      </em>
                                    </p>
                                  </div>
                                </div>
                                <div className="lc-block d-inline-flex">
                                  <div
                                    className="lc-block me-3"
                                    style={{ minWidth: 72 }}
                                  >
                                    <img
                                      className="img-fluid rounded-circle "
                                      src="https://i.pravatar.cc/96?img=3"
                                      width={72}
                                      height={72}
                                    />
                                  </div>
                                  <div className="lc-block">
                                    <div editable="rich">
                                      <p className="h5">Matthew N. Graham</p>
                                      <p className="text-muted">
                                        Street Artist
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide lc-block"
                        role="group"
                        aria-label="3 / 3"
                        style={{ width: 856 }}
                      >
                        <div className="row row-cols-1 row-cols-lg-2 g-4">
                          <div className="col">
                            <div className="card p-3">
                              <div className="card-body">
                                <div className="lc-block mb-4">
                                  <div editable="rich">
                                    <p>
                                      <em className="rfs-8 text-muted">
                                        {" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc et metus id ligula
                                        malesuada placerat sit amet quis enim.
                                        Aliquam erat volutpat. In pellentesque
                                        scelerisque auctor.&nbsp;
                                      </em>
                                    </p>
                                  </div>
                                </div>
                                <div className="lc-block d-inline-flex">
                                  <div
                                    className="lc-block me-3"
                                    style={{ minWidth: 72 }}
                                  >
                                    <img
                                      className="img-fluid rounded-circle "
                                      src="https://i.pravatar.cc/96?img=23"
                                      width={72}
                                      height={72}
                                    />
                                  </div>
                                  <div className="lc-block">
                                    <div editable="rich">
                                      <p className="h5">Leslie R. Oleary</p>
                                      <p className="text-muted">
                                        Fashion designer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card p-3">
                              <div className="card-body">
                                <div className="lc-block mb-4">
                                  <div editable="rich">
                                    <p>
                                      <em className="rfs-8 text-muted">
                                        {" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc et metus id ligula
                                        malesuada placerat sit amet quis enim.
                                        Aliquam erat volutpat. In pellentesque
                                        scelerisque auctor.&nbsp;
                                      </em>
                                    </p>
                                  
                                  </div>
                                </div>
                                <div className="lc-block d-inline-flex">
                                  <div
                                    className="lc-block me-3"
                                    style={{ minWidth: 72 }}
                                  >
                                    <img
                                      className="img-fluid rounded-circle "
                                      src="https://i.pravatar.cc/96?img=6"
                                      width={72}
                                      height={72}
                                    />
                                  </div>
                                  <div className="lc-block">
                                    <div editable="rich">
                                      <p className="h5">James C. Call</p>
                                      <p className="text-muted">
                                        Street Artist
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                      <span
                        className="swiper-pagination-bullet swiper-pagination-bullet-active"
                        tabIndex={0}
                        role="button"
                        aria-label="Go to slide 1"
                        aria-current="true"
                      />
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex={0}
                        role="button"
                        aria-label="Go to slide 2"
                      />
                      <span
                        className="swiper-pagination-bullet"
                        tabIndex={0}
                        role="button"
                        aria-label="Go to slide 3"
                      />
                    </div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      </div>
    );
  }
}

export default Sam;
