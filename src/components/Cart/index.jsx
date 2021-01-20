// import {useContext, useState} from 'react';
// import {Store} from '../../store';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const Cart = () => {

//     const [data, setData] = useContext(Store);
//     return (
//         <>
//             <h1>Esto es el cart</h1>

//             {
//                 data.items.map (item => <h2>{item.titulo}</h2>)
//             }
//         </>
//     )

// }

// export default Cart;
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import CountContainer from '../Detail/CountButton/CountContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart = () => {
    

    // UseContext : carga la data del carrito desde el contexto y también permite modificarla
    const [data, isInCart, addItem, addToExisting, removeItem, clear] = useContext(Store);

    const getSubtotalPerItem = (item) => {
        return item.data.price * item.quantity;
    }

    const getTotal = () => {
        let total = 0;
        data.items.forEach(item =>
            total = total + getSubtotalPerItem(item)
        );
        return total;
    }

    const modifyItemQuantity = (item, newQuantity) => {
        let itemModified = {
            data: item.data,
            quantity: newQuantity
        };
        newQuantity > item.quantity ? addItem(itemModified) : removeItem(itemModified);
    }

    const removeWholeItem = (item) => {
         modifyItemQuantity(item, 0);
    }

    return (
        <>
        {
            data.totalQuantity > 0 ? 
            <>
                <div>
                   
                 
                                <button variant="contained" color="primary" onClick={() => clear()}>
                                    Vaciar carrito
                                </button>
                   
                   
                </div>
                {
                    data.items.map(item => {
                        return (
                            <div key={item.data.id} >
                                <div>
                                    <div>
                                        <div>
                                            <button>
                                                <img src={item.data.image} />
                                            </button>
                                        </div>
                                        <div>
                                            <div>
                                            <div>
                                                <div>
                                                {item.data.title}
                                                </div>
                                                <div>
                                                {item.data.description}
                                                </div>
                                                <div>
                                                {`Cantidad de este producto: ${item.quantity}`}
                                                </div>
                                                <div variant="body2" color="textSecondary">
                                                {`Precio unitario: ${item.data.price}`}
                                                </div>
                                            </div>
                                            <div>
                                                <CountContainer stock={item.data.stock} itemQuantity={item.quantity} 
                                                modifyItemQuantity={(newQuantity) => {
                                                    modifyItemQuantity(item, newQuantity)
                                                }} />
                                                <button variant="contained" color="primary" onClick={() => {
                                                    removeWholeItem(item)
                                                }}>
                                                    Eliminar producto del carrito
                                                </button>
                                            </div>
                                            </div>
                                            <div>
                                                <p variant="subtitle1">{`Subtotal: $${getSubtotalPerItem(item)}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <div>
                        <div>
                            <div>
                                <p>{`Cantidad total de productos: ${data.totalQuantity}`}</p>
                            </div>
                            <div>
                                <p>{`Precio total: $${getTotal()}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </> :
            <div>
                <h3>No hay productos en el carrito</h3>
                <Link to="/">
                    <button variant="contained" color="primary">
                        Ir a comprar!
                    </button>
                </Link>
            </div>
        }
        </>
    );
}

export default Cart;