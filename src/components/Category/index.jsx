import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductCardContainer from '../Product/ProductCardContainer';
import {getFirestore} from '../../db'; 


const Category = () => {
    
    const {category_name} = useParams();
    const db = getFirestore();
    // const [items, setItems] = useState([]);

    const getProductsFromDB = () => {
        db.collection('productos').get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            console.log(arr);

            setProductArray(arr);
        })
        .catch(e => console.log(e))
    }

    const [productsArray, setProductArray] = useState ([])


        useEffect(() => {
            getProductsFromDB();

            // getProducts.then(rta => setProductArray(rta));
        }, []);

        return (
            <div>
                <ProductCardContainer category_name={category_name} productsArray={productsArray} /> 

                
            </div>
        )

}
export default Category;