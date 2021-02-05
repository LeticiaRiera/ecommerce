import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Store} from '../../store';
import {useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import ProductDestacado from '../Product/ProductDestacado';



const ProductDetail = ({item}) => {

    const history           = useHistory();
    const [data, setData]   = useContext(Store);
    const [qty, setQty]     = useState(1);	

    const handleClickRestar = () => {
        if (qty > 1) {
            setQty (qty -1);
        }
    }
    const onAdd = () => {

        const productoIndex = data.items.findIndex(product => product.item.id === item.id);
        console.log(productoIndex)
        const precioTotalProducto = item.data.precio * qty
        const precioTotal = data.items.reduce((acumulador, item) => acumulador + (item.item.data.precio * item.cantidad), 0)
        const cantidadTotal = data.items.reduce((acumulador, item) => acumulador + item.cantidad, 0)

        if(data.items[productoIndex]){

            console.log(cantidadTotal)
            data.items[productoIndex].cantidad += qty
            data.items[productoIndex].totalProducto = data.items[productoIndex].cantidad * data.items[productoIndex].item.data.precio;
            data.precioTotal = precioTotal + precioTotalProducto
            data.cantidad = cantidadTotal + qty

            setData({...data})

        } else {
            
            setData({ ...data,
                cantidad: cantidadTotal + qty,
                items: [...data.items,
                {
                    item: item, 
                    cantidad:qty,
                    totalProducto: precioTotalProducto
                }
                ],
                precioTotal: precioTotal + precioTotalProducto
            })
        }
        
        
    }

    useEffect(() => {
        setQty(1);
    }, [item])





    const GoToCartRedirect = () => {
        history.push('/cart')
    }
   


    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-6">
                    <h1>{item?.data?.titulo}</h1>
                    <img className="w-100" src={`/images/${item?.data?.imagenProducto}`} alt={item?.data?.alt}/>
                </div>
                <div className="col-6 d-flex flex-wrap align-content-center">
                    <div className="justify-content-center col-12">
                        <h1>Descripción</h1>
                        <p className="mt-4">{item?.data?.descripcion}</p>
                        <p>{item?.data?.precio}</p>
                    </div>


                    <div className="d-flex justify-content-center col-12 mt-2">
                        <button className="btn btn-outline-danger btn-number font-weight-bold mr-1" disabled={qty === 1 ? 'disabled' : null} onClick={handleClickRestar}>-</button>
                        <input className="form-control text-center" type="text" value={qty} readOnly />
                        <button className="btn btn-outline-success btn-number font-weight-bold ml-1" onClick={() => setQty(qty + 1)}>+</button>
                    </div>

                    <div className="d-flex justify-content-center col-12 mt-2">
                        <button className="btn btn-primary" onClick={()=> onAdd(onAdd)}>Agregar al carrito</button>
                    </div>
                    

                    <div className="d-flex justify-content-center col-12 mt-2">
                        <ReactBootStrap.Button onClick={GoToCartRedirect}>Ver carrito</ReactBootStrap.Button>
                    </div>
                </div>
            </div>
            <ProductDestacado/>
        </div>
    )
}

export default ProductDetail;
