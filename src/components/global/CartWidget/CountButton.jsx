import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import { useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function CountContainer({ count, increment, decrement, qty }) {
  const [showGoToCart, setShowGoToCart] = useState(false);

  const goToCartBtnShow = () => {
      setShowGoToCart(true);
  }
  
  let history = useHistory();
  
  const GoToCartRedirect = () => {
      history.push('/cart')
  }
  const [btnSuccess, setBtnSuccess] = useState(false)
  
  const alternarSuccess = () => {
      setBtnSuccess(true)
      goToCartBtnShow();
      setTimeout(() => {
          setBtnSuccess(false)
      }, 3000)
      
  }
  
  const onAdd = () => {
    alert(`Agregaste ${count} al carrito`);
}

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
            {/* <div className="d-flex justify-content-center col-12 mt-2">
              <ReactBootStrap.Button variant="primary" className="mt-2"  onClick={onAdd}>Añadir</ReactBootStrap.Button>
            </div> */}
            <div className="d-flex justify-content-center col-12 mt-2">
                    <ReactBootStrap.Button
                    onClick={alternarSuccess}
                    className={btnSuccess ? "success" : ""}
                    >{btnSuccess ? "Agregado con éxito" : "Agregar al carrito"}</ReactBootStrap.Button>
                </div>
                <div className="d-flex justify-content-center col-12 mt-2">
                    <ReactBootStrap.Button
                    onClick={GoToCartRedirect}
                    className={showGoToCart ? "show" : ""}
                    >Ver carrito</ReactBootStrap.Button>
                </div>
            </div>
 
          </div>
        </div>
      
      </>
    );
  }
