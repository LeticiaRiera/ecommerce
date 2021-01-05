import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/global/Nav/Nav';
import ProductCardContainer from './components/Product/ProductCardContainer';
import Detail from './components/Detail/index';
import Home from './components/Home';
import Category from './components/Category/index';
import Cart from './components/global/CartWidget/Cart';
import CategoriesNav from './components/Product/Categories/CategoriesNav';


function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Switch>
       <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="/category/manteles">
          <ProductCardContainer/>
        </Route> */}
        <Route path="/productos/:category_name?">
          <CategoriesNav />
          <Category />
        </Route>
        <Route path="/detail/:id">
          <Detail />
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
    
    

  ); 
}

export default App;
