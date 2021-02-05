import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductCard from './ProductCard';
import {getFirestore} from '../../db';

const ProductDestacado = () => {
    
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [detalle, setDetalle] = useState({});
    const db = getFirestore();


    const getProductsFromDB = () => {
        db.collection('productos').where("destacados", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            setDetalle (arr.filter(item => item.id === id)[0]);
            setProduct(arr);
        })
        .catch(e => console.log(e))
    }



      

    useEffect(() => {
        getProductsFromDB();
    }, []);

    return (
        <section>
            <div className="container col-12">
    
            {
                product.length ?
                <>
                <h2 className="text-center mt-2">Productos destacados</h2>
                <div>
                    {
                        ( product.map((productsArray, i) => 
                            <div key={productsArray.id + i + Math.random}>
                                <ProductCard
                                id={productsArray.id}
                                imagenProducto={productsArray.data.imagenProducto}
                                titulo={productsArray.data.titulo}
                                precio={productsArray.data.precio} />
                            </div>
                         ))
                    }
                </div>
                </>:
                <div className="d-flex justify-content-center mt-4">
                    <div className="alert alert-success col-4 p-4" role="alert">
                        <strong>Espera un instante! </strong> Cargando productos.
                    </div>
                </div>
            }
    
            </div>
        </section>
        )
    }

export default ProductDestacado;