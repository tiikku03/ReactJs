import React from "react";

export default function CardBootStrap(){
    return(
        <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="card">
            <div className="card-body">
              <h5 className="titulo de tarjeta">Titulo de tarjeta</h5>
              <p>Texto de ejemplo tarjeta 1</p>
              <a href="#" className="btn btn-primary">Ver mas</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="card">
            <div className="card-body">
              <h5 className="titulo de tarjeta">titulo de tarjeta</h5>
              <p>Texto de ejemplo tarjeta 1</p>
              <a href="#" className="btn btn-success">Ver mas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}