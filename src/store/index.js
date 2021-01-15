import {createContext, useState, useEffect} from 'react';
import json from '../components/utils/productos.json';

export const Store = createContext();

const ShopContextProvider = ({ children }) => {
    const [item, setCart] = useState([]);
    const [products, setProducts] = useState([]);
  
    const addToCart = productId => {
      const prodAlCart = products.filter(prod => prod.id === productId)[0];
      if (!prodAlCart.qty) {
        console.log("Funciono en true");
        prodAlCart.qty = 1;
        setCart([...item, prodAlCart]);
      } else {
        item[item.indexOf(prodAlCart)].qty++;
        setCart([...item]);
      }
    };
  
    const deleteFromCart = productId => {
      const prodFueraDeCart = item.filter(prod => prod.id !== productId);
      setCart(prodFueraDeCart);
    };
  
    useEffect(() => {
      setProducts(json);
      console.log("Productos:");
      console.log(products);
      console.log("carrito:");
      console.log(item);
    }, [item]);
  
    return (
      <Store.Provider
        value={{
          item,
          products,
          addToCart,
          deleteFromCart
        }}
      >
        {children}
      </Store.Provider>
    );
  };
  
  export default ShopContextProvider;
  