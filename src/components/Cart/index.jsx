import {useContext, useState} from 'react';
import {Store} from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart = ({item}) => {

    const [data, setData] = useContext(Store);
    console.log("que onda");
    console.log(data);
    return (
        <>
            <h1>Esto es el cart</h1>

            {
                data.items.map (item => <h2>{item[0].data.titulo}</h2>)
            }
        </>
    )

}

export default Cart;
