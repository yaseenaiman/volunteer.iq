

export default function CardF({id, name, articles, imgi}) {
   
    return (
      
          <div className= " col-sm-4 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                   src={require(`../api/posts/images/${imgi}.jpg`)} alt="house"  style={{ width: '100%', height: '300px' }}

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
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                {articles}
                                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
          
      
    );
  }


