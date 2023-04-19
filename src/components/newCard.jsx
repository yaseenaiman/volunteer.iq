
 
import { getUsers } from "../api/api";
import { useState } from "react";
export default function NewCard({
    id,
    name,
    rating,
    followers,
    articles,
  })
  
  {const [tasks, setTasks] = useState(getUsers());
  
    return (

<>

    
 

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
                <h5 className="card-title">{tasks[0].Name}</h5>
                <p className="card-text">
                {tasks[0].Articles}
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
                <h5 className="card-title">{tasks[1].Name}</h5>
                <p className="card-text">
                {tasks[1].Articles}
                                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          </div>

</>


);
    
    }