import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Store} from '../../store';
import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';



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

    console.log(data);

    const GoToCartRedirect = () => {
        history.push('/cart')
    }
 
    // const restarProducto = () => {
    //     item.quantity= item.quantity-1;
    //     if(qty>0) {
            
    //         setQty(qty - 1);
    //         setData({ 
    //             ...data, 
    //             cantidad: data.cantidad-1,
    //             precioTotal: data.precioTotal - precio
    //         });
    //     }  
    //     console.log(data.precioTotal)
    // }
  

    // function sumarProducto(){
    //     item.quantity= item.quantity+=1;
    //     if(qty<stock) {
    //         setQty(qty+1)
    //         setData({ 
    //             ...data, 
    //             cantidad: data.cantidad+1,
    //             precioTotal: data.precioTotal + precioProducto
    //         });
    //     }
    // }





    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-6">
                    <h1>{item.titulo}</h1>
                    <img className="w-100" src={item.imagenProducto} alt={item.alt}/>
                </div>
                <div className="col-6 d-flex flex-wrap align-content-center">
                    <div className="justify-content-center col-12">
                        <h1>Descripción</h1>
                        <p className="mt-4">{item.descripcion}</p>
                        <p>{item.precio}</p>
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