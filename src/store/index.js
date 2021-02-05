import {useState, useEffect, createContext, useParams} from 'react';
// import {getFirestore} from '../db/db'; 


export const Store = createContext(); 


// const StoreProvider = ({ children }) => {

//   const {id} = useParams();
//   const [data, setData] = useState([]);
//   const [product, setProduct] = useState([]);
//   const [detalle, setDetalle] = useState({});

//   const db = getFirestore();

//   const getProductsFromDB = () => {
//     db.collection('productos').get()
//     .then(docs => {
//         let arr = [];
//         docs.forEach(doc => {
//             arr.push({id: doc.id, data: doc.data()})
//         })
//         setProduct(arr);
//     })
//     .catch(e => console.log(e))
// }


//   const addToCart = productId => {
//     const prodAlCart = product.filter(prod => prod.id === productId)[0];
//     if (!prodAlCart.quantity) {
//       console.log("Funciono en true");
//       prodAlCart.quantity = 1;
//       setData([...data, prodAlCart]);
//     } else {
//       data[data.indexOf(prodAlCart)].quantity++;
//       setData([...data]);
//     }
//   };

//   const deleteFromCart = productId => {
//     const prodFueraDeCart = data.filter(prod => prod.id !== productId);
//     setData(prodFueraDeCart);
//   };

//   const deleteAll = () => setData([]);

//   useEffect(() => {
//     getProductsFromDB();
// }, [data]);


//   return (
//     <Store.Provider
//       value={{
//         data,
//         product,
//         addToCart,
//         deleteFromCart,
//         deleteAll
//       }}
//     >
//       {children}
//     </Store.Provider>
//   );
// };

// export default StoreProvider;
