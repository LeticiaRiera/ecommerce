import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/global/NavBar';
import ProductCard from './components/global/ProductCard';



function App() {
  return (
    <>
    <NavBar />


    <ProductCard titulo="Mantel antimanchas" descripcion="Medidas:  1.80 x 1.40" precio="$800" />
    <ProductCard  titulo="Atrapa sueños" descripcion="Descripción producto" precio="$500" />
    <ProductCard titulo="Almohadones" descripcion="Descripción producto" precio="$900" />


    </>
    
    

  ); 
}

export default App;
