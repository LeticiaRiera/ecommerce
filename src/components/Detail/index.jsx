import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Mantel from '../../assets/images/mantel.jpg';

const Detail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve ({
                id: id,
                nombre: "Mandel antimanchas",
                foto: Mantel,
                descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam?",
                precio: 19000,
            })
        }, 700);
    });

    useEffect(() => {
        getProducts
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);
    return (
        <>
        {
            product ?
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        El id del produco es: {id}
                    </div>
                    <div className="col-12">
                        <ProductDetail item = {product} />
                    </div>
                </div>
            </div> :
            <p>Cargando productos...</p>
        }
            
        </>
    )
}

export default Detail;