import 'bootstrap/dist/css/bootstrap.min.css';
import CountContainer from "../global/CartWidget/CountContainer";
import ProductCardContainer from '../Product/ProductCardContainer';




const ProductDetail = ({item}) => {

    
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-6">
                    {/* <p>El id de producto es: <b>{item.id}</b></p> */}
                    <h1>{item.nombre}</h1>
                    <img className="w-100" src={item.foto} alt=""/>
                </div>
                <div className="col-6 d-flex flex-wrap align-content-center">
                    <h1>Descripción</h1>
                    <p className="mt-4">{item.descripcion}</p>
                    <p>{item.precio}</p>
                    <CountContainer />
                </div>
            </div>
            <div className="mt-4 container">
                <ProductCardContainer/>
            </div>
        </div>
    )
}

export default ProductDetail;