import 'bootstrap/dist/css/bootstrap.min.css';
import CountContainer from "../global/CartWidget/CountContainer";
import ProductCardContainer from '../Product/ProductCardContainer';
import {Store} from '../../store';
import {useContext} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useState} from 'react';
import {useHistory} from 'react-router-dom';






const ProductDetail = ({item}) => {

    const [data, setData] = useContext(Store);
    console.log(data);
    const [qty, setQty] = useState(+1);	

    const onAdd = () => {
        setData({ ...data,
                  cantidad: data.cantidad + qty,
                  items: [...data.items, item]})
        // alert(`Agregaste ${count} al carrito`);
    }


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

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-6">
                    <h1>{item.nombre}</h1>
                    <img className="w-100" src={item.foto} alt=""/>
                </div>
                <div className="col-6 d-flex flex-wrap align-content-center">
                    <h1>Descripción</h1>
                    <p className="mt-4">{item.descripcion}</p>
                    <p>{item.precio}</p>
                    <CountContainer />
                    <div className="d-flex justify-content-center col-12 mt-2">
              <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>

                    {/* <ReactBootStrap.Button
                    onClick={alternarSuccess}
                    className={btnSuccess ? "success" : ""}
                    >{btnSuccess ? "Agregado con éxito" : "Agregar al carrito"}</ReactBootStrap.Button> */}
            </div>
            <div className="d-flex justify-content-center col-12 mt-2">
                <ReactBootStrap.Button
                onClick={GoToCartRedirect}
                className={showGoToCart ? "show" : ""}
                >Ver carrito</ReactBootStrap.Button>
            </div>
                </div>
            </div>
            <div className="mt-4 container">
                <ProductCardContainer/>
            </div>
        </div>
    )
}

export default ProductDetail;