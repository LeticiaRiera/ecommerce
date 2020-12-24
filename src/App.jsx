import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/global/Nav/Nav';
import ProductCardContainer from './components/Product/ProductCardContainer';
import Detail from './components/Detail/index';


function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Detail />
      <Switch>
        <Route path="/Productos">
          <ProductCardContainer/>
        </Route>
        <Route path="/category">
          {/* <Category /> */}
        </Route>
        <Route path="/detail">
          <Detail />
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
