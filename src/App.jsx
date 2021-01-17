import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/global/Nav/Nav';
import ProductCardContainer from './components/Product/ProductCardContainer';
import Detail from './components/Detail/index';
import Home from './components/Home';
import Category from './components/Category/index';
import Cart from './components/Cart';
import CategoriesNav from './components/Product/Categories/CategoriesNav';
import {Store} from './store';


function App() {

  const [data, setData] = useState({
    items : [],
    cantidad: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Nav />
          
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/productos/:category_name?">
              <CategoriesNav />
              <Category />
            </Route>

            <Route path="/detail/:id?">
              <ProductCardContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              {/* <Error404/> */}
            </Route>
          </Switch>

          {/* <Footer/>  */}
      </BrowserRouter>
    </Store.Provider>
    
    
    

  ); 
}

export default App;
