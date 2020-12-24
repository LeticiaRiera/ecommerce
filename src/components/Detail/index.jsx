import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import Mantel from '../../assets/images/mantel.jpg';

const Detail = () => {

    const [product, setProduct] = useState(null);

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve ({
                id: 1,
                nombre: "Mandel antimanchas",
                foto: Mantel,
                descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam?",
                precio: 800,
            })
        }, 2000);
    });

    useEffect(() => {
        getProducts.then(response => setProduct(response));
    }, []);
    return (
        <>
        {
            product ?
            <>
                <ProductDetail item = {product} />

            </> :
            <p>Cargando productos...</p>
        }
            
        </>
    )
}

export default Detail;