import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Store} from '../../store';
import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {getFirestore} from '../../db'; 



const ProductDetail = ({item}) => {

    console.log('detail')
    console.log(item);
    const history           = useHistory();
    const [data, setData]   = useContext(Store);
    const [qty, setQty]     = useState(data.cantidad);	

    const handleClickRestar = () => {
        if (qty > 1) {
            setQty (qty -1);
        }
    }

    const onAdd = () => {
        setData({ ...data,
                  cantidad: data.cantidad + qty,
                  items: [...data.items, {item: item, cantidad:qty}],
                })
    }
    console.log("averrrrr");


    const GoToCartRedirect = () => {
        history.push('/cart')
    }
 
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-6">
                    <h1>{item[0].data.titulo}</h1>
                    <img className="w-100" src={item[0].data.imagenProducto} alt={item[0].data.alt}/>
                </div>
                <div className="col-6 d-flex flex-wrap align-content-center">
                    <div className="justify-content-center col-12">
                        <h1>Descripción</h1>
                        <p className="mt-4">{item[0].data.descripcion}</p>
                        <p>{item[0].data.precio}</p>
                    </div>


                    <div className="d-flex justify-content-center col-12 mt-2">
                        <button className="btn btn-outline-danger btn-number font-weight-bold mr-1" disabled={qty === 1 ? 'disabled' : null} onClick={handleClickRestar}>-</button>
                        <input className="form-control text-center" type="text" value={qty} readOnly />
                        <button className="btn btn-outline-success btn-number font-weight-bold ml-1" onClick={() => setQty(qty + 1)}>+</button>
                    </div>

                    <div className="d-flex justify-content-center col-12 mt-2">
                        <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                    

                    <div className="d-flex justify-content-center col-12 mt-2">
                        <ReactBootStrap.Button onClick={GoToCartRedirect}>Ver carrito</ReactBootStrap.Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;