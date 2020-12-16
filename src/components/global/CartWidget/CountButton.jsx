import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {useState} from 'react';

export default function CountContainer() {
  const [qty, setQty] = useState(1);
    
  const handleClicResta = () => {
      if(qty > 1){
          setQty(qty -1);
      }
  }
  const onAdd = () => {
    alert(`Agregaste ${qty} al carrito`);
}

    return (
      <>
      <div className="container">
        <div className="row">
          <div class="input-group">
            <div className="col-4">
              <span class="input-group-btn">
                <button type="button" class="btn btn-outline-danger btn-number font-weight-bold" disabled={qty == 1 ? 'disabled' : null} onClick={handleClicResta}>-</button>
              </span> 
            </div>
            <div className="col-4">
              
              <input type="text" name="quantity" class="form-control input-number" value={qty} min="1" max="10"/>
            </div>
            <div className="col-4">
            <span class="input-group-btn">
                <button type="button" class="btn btn-outline-success btn-number font-weight-bold" onClick={() => setQty(qty + 1)}>+</button>
              </span>
            </div>
            
            <ReactBootStrap.Button variant="primary" className="mt-2"  onClick={onAdd}>Añadir</ReactBootStrap.Button>
          </div>
        </div>
      </div>
      </>
    );
  }
