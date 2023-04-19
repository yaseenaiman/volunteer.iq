import { Component } from "react";

import background1 from "../api/posts/images/river.jpg";

export default function CardP({
    id,
    name,
    rating,
    followers,
    articles,
  }) {
    return (

<>

    
 



<div className="container">
  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div className="row">
      <div
        className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        lc-helper="background"
        style={{
          backgroundImage: `url(${background1})` ,
          backgroundSize: "cover"
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <div className="lc-block pt-5 mt-5 mb-4">
            <div editable="rich">
              <h2 className="display-6 lh-1 fw-bold">
              {name}              </h2>
              <p>
                {articles}
              </p>
            </div>
          </div>
          <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
            <a
              className="btn btn-link btn-sm text-white "
              href="#"
              role="button"
            >
              Read more
            </a>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</div>
</>


);
}
