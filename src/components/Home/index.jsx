
// import ProductCardContainer from '../Product/ProductCardContainer';
// import {useState} from 'react';
// import {getFirestore} from '../../db'; 



// const Home = ({item}) => {
    
//     const db = getFirestore();
//     const [items, setItems] = useState([]);

//     const getProductsFromDB = () => {
//         db.collection('productos').get()
//         .then(docs => {
//             let arr = [];
//             docs.forEach(doc => {
//                 arr.push({id: doc.id, data: doc.data()})
//             })
//             console.log(arr);

//             setProductArray(arr);
//         })
//         .catch(e => console.log(e))
//     }

//     const [productsArray, setProductArray] = useState ([])
 

//     return (
//         <>
//         <ProductCardContainer />
//         </>
//     )
// }

// export default Home;