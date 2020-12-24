import Mantel from '../../assets/images/mantel.jpg';
import AtrapaSueno from '../../assets/images/atrapa-suenos.jpg';
import Almohadones from '../../assets/images/almohadones.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import CountContainer from "../global/CartWidget/CountContainer";




const ProductDetail = ({item}) => {

    
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-6">
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
        </div>
    )
}

export default ProductDetail;