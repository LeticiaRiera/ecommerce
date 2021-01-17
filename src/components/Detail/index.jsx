import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import json from '../utils/productos.json';
import Mantel from '../../assets/products/mantel.jpg';
import AtrapaSueno from '../../assets/products/atrapa-suenos.jpg';
import Almohadones from '../../assets/products/almohadones.jpg'



const Detail = (    ) => {

    const {id} = useParams();
    const [products, setProduct] = useState([]);


    const getProducts = new Promise ((resolve, reject) => {
        
        const selectProduct = json.filter (item => item.id === parseInt(id))
        resolve (selectProduct[0]);
    });

    // const getProducts = new Promise ((resolve, reject) => {
    //     setTimeout(() =>{
    //         resolve ({
    //             id: id,
    //             nombre: "Mandel antimanchas",
    //             foto: Mantel,
    //             descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam?",
    //             precio: 19000,
    //         })
    //     }, 700);
    // });

    useEffect(() => {
        getProducts
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
        {
            products ?
            <div className="container">
                <div className="row">
                    {/* Esto es para hacer un bredcrum */}
                    {/* <div className="col-12">
                        <ol>
                            <li>
                                <Link to={`/${products.category}`}>{products.category.split('-').join(' ')}</Link>
                            </li>
                            <li>
                                {products.title}
                            </li>
                        </ol>
                    </div> */}

                    <div className="col-12">
                        <ProductDetail item = {products} />
                    </div>
                </div>
            </div> :
            <p>Cargando productos...</p>
        }
            
        </>
    )
}

export default Detail;