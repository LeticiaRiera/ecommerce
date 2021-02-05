import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductCardContainer from '../Product/ProductCardContainer';
import {getFirestore} from '../../db'; 


const Category = () => {
    
    const {category_name} = useParams();
    const db = getFirestore();
    // const [data, setData] = useState ([]);
    const [productsArray, setProductArray] = useState ([])

    const getProductsFromDB = () => {
        db.collection('productos').get()
        // db.collection('productos').where("categoria", "==", category_name).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setProductArray(arr);
        })
        .catch(e => console.log(e))
    }

    


        useEffect(() => {
            getProductsFromDB();
        }, [category_name]);

        return (
            <div>
                <ProductCardContainer category_name={category_name} productsArray={productsArray} /> 

                
            </div>
        )

}
export default Category;