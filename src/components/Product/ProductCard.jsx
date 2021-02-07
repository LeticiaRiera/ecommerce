import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import './products.css';
import {Link} from 'react-router-dom';


const ProductCard = (props) => {
    return (
<div>

  <ReactBootStrap.Container>
      <ReactBootStrap.Col className="col-lg-4 col-sm-12 mb-4 mt-4 float-left">
        <ReactBootStrap.Card style={{ width: '100%' }}>
            <ReactBootStrap.Card.Img variant="top" src={`/images/${props.imagenProducto}`} alt={props.alt} />
                <ReactBootStrap.Card.Subtitle className="text-center text-uppercase card_Titulo">{props.titulo}</ReactBootStrap.Card.Subtitle>
                <div className="col-12 text-center card_VarMas">
                    <Link to={`/detail/${props.id}`}><b>Ver más</b></Link>
                </div>
        </ReactBootStrap.Card>
    </ReactBootStrap.Col>
</ReactBootStrap.Container>

</div>
    )
}


export default ProductCard;