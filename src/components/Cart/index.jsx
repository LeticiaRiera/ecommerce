import {useContext, useState} from 'react';
import {Store} from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart = ({item}) => {

    const [data, setData] = useContext(Store);
    console.log(item);
    return (
        <>
            <h1>Esto es el cart</h1>

            {
                data.items.map (item => <h2>{item?.item?.data?.titulo}</h2>)
            }
        </>
    )

}

export default Cart;
