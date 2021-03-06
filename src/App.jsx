import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/global/Nav/Nav';
import Detail from './components/Detail/index';
import Category from './components/Category/index';
import Cart from './components/Cart';
import CategoriesNav from './components/Product/Categories/CategoriesNav';
import Checkout from './components/Checkout';
import {Store} from './store';
import Footer from './components/global/Footer/Footer';
import ProductDestacado from './components/Product/ProductDestacado';

function App() {

  const [data, setData] = useState({
    items : [],
    cantidad: 0,
    precioTotal: 0,
  })

  return (
    
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Nav />
          <Switch>
            <Route exact path="/">
              <ProductDestacado />
              <Category />
            </Route>
            <Route path="/productos/:category_name?">
              <CategoriesNav />
              <Category />
            </Route>

            <Route path="/detail/:id?">
              <Detail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/cart">
              <Checkout />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="*">
              {/* <Error404/> */}
            </Route>
          </Switch>
          <Footer/> 
      </BrowserRouter>
    </Store.Provider>
    
    

  ); 
}

export default App;
