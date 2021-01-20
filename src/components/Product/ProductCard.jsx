import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';


const ProductCard = (props) => {
    // console.log(props)

    

    return (
<div>

  <ReactBootStrap.Container>
      <ReactBootStrap.Col className="col-lg-3 col-sm-12 mb-4 mt-4 float-left">
        <ReactBootStrap.Card style={{ width: '100%' }}>
            <ReactBootStrap.Card.Img variant="top" src={props.imagenProducto} alt={props.alt} />
            <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>{props.titulo}</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                {props.descripcion}
                </ReactBootStrap.Card.Text>
                <div className="col-12 mt-2">
                    <div  className="col-12 float-left mt-1">
                    <Link to={`/detail/${props.id}`} > Ver más</Link>
                    </div>
                </div>
            </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
    </ReactBootStrap.Col>
</ReactBootStrap.Container>

</div>
    )
}


export default ProductCard;