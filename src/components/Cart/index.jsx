import {useContext} from 'react';
import {Store} from '../../store';


const Cart = () => {

    const [data, setData] = useContext(Store);

    return (
        <>
            <h1>Esto es el cart</h1>

            {
                data.items.map (item => <h2>{item.nombre}</h2>)
            }
        </>
    )

}

export default Cart;