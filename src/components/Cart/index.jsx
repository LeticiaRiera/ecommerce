import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState} from 'react';
import {Store} from '../../store';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';




const Cart = () => {

    const [data, setData] = useContext(Store);

    
    const deleteItem = productId => {
        const productoIndex = data.items.findIndex(item => item.item.id === productId);
        const prodFueraDeCart = data.items.filter(item => item.item.id !== productId);
        const precioTotalProducto = data.items[productoIndex].item.data.precio * data.items[productoIndex].cantidad
        const precioTotal = data.items.reduce((acumulador, item) => acumulador + (item.item.data.precio * item.cantidad), 0)
        const cantidadTotal = data.items.reduce((acumulador, item) => acumulador + item.cantidad, 0)

        setData({...data,
            items: prodFueraDeCart,
            precioTotal: precioTotal - precioTotalProducto,
            cantidad: cantidadTotal - data.items[productoIndex].cantidad
        })
      };

    return (
        <>
        <div className="container">
            <div className="row col-12 mt-4">
                <h2 className="container">Resumen del carrito</h2>
            </div>
            <div className="col-12 mb-4">
                <table class="table text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                        <th>Precio</th>
                        <th>Eliminar producto</th>
                    </tr>
                </thead>
                <tbody>
                {
                data.items.map((item) =>{
                    return (
                        <CartItem
                            // imagenProducto = {item?.item?.data?.imagenProducto}
                            titulo = {item?.item?.data?.titulo}
                            cantidad = {item?.cantidad}
                            unidad = {item.item?.data?.precio}
                            precioTotalProducto = {item.totalProducto}
                            eventDeleteItem = {() => deleteItem(item?.item?.id)}>
                        </CartItem>
                        
                    )
                }

               )
            }

                    <tr>Precio Total: {data.precioTotal}</tr>

                </tbody>
                </table>
            </div>
            <div className="col-8 mt-4 float-left">
                <th>¿Tenes un cupón de descuento?</th>
                <form>
                    <input type="text" className="form-control float-left col-4 mr-2" placeholder="Ingresar cupón" />
                    <button className="col-2 float-left btn btn-dark">Validar</button>
                </form>
            </div>
            <div className="col-4 float-left mt-4">
                <div className="mt-4"></div>
                <button className="btn btn-success">
                <Link to="/checkout" className="text-dark">Finalizar compra</Link>
                </button>
            </div>
        </div>
        </>
    )

}

export default Cart;
