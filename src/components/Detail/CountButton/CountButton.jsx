import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CountContainer({ count, increment, decrement }) {
  
    return (
      <>
<div className="container">
        <div className="row">
          <div className="input-group">
            <div className="col-4 d-flex justify-content-center">
              <span className="input-group-btn">
                <button type="button" className="btn btn-outline-danger btn-number font-weight-bold" onClick={() => decrement()}>-</button>
              </span> 
            </div>
            <div className="col-4 d-flex justify-content-center">

              <input type="text" name="quantity" className="form-control input-number" value={count} min="1" max="5"/>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <span className="input-group-btn">
                  <button type="button" className="btn btn-outline-success btn-number font-weight-bold"  onClick={() => increment()}>+</button>
                </span>
            </div>

            </div>
 
          </div>
        </div>
      
      </>
    );
  }
