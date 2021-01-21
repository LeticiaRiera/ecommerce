import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import {getFirestore} from '../../db'; 




const Detail = (    ) => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();


    const getProductsFromDB = () => {
        db.collection('productos').get()
        .then(docs => {
            console.log(docs);
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            console.log(arr);

            setProduct(arr);
        })
        .catch(e => console.log(e))
    }



    useEffect(() => {
        getProductsFromDB();
    }, []);

    return (
        <>
        {
            product ?
            <div className="container">
                <div className="row">
                    {/* Esto es para hacer un bredcrum */}
                    {/* <div className="col-12">
                        <ol>
                            <li>
                                <Link to={`/${product.category}`}>{product.category.split('-').join(' ')}</Link>
                            </li>
                            <li>
                                {product.title}
                            </li>
                        </ol>
                    </div> */}

                    <div className="col-12">
                        <ProductDetail item={product} />
                    </div>
                </div>
            </div> :
            <p>Cargando productos...</p>
        }
            
        </>
    )
}

export default Detail;