import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

const ProductCard = (props) => {

    return (
<div>
<ReactBootStrap.Container className="mt-4">
    <ReactBootStrap.Col xs={6} md={4} className="float-left">
        <ReactBootStrap.Card>
            <ReactBootStrap.Card.Img variant="top" src="https://placehold.it/200x150" alt="Producto de prueba" />
            <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>{props.titulo}</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        {props.descripcion}
                    </ReactBootStrap.Card.Text>
            </ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Footer>
            <medium className="text-muted font-weight-bold pt-1">{props.precio}</medium>
            <ReactBootStrap.Button className="float-right" variant="primary">Añadir</ReactBootStrap.Button>
            </ReactBootStrap.Card.Footer>
        </ReactBootStrap.Card>
    </ReactBootStrap.Col>
</ReactBootStrap.Container>
  


</div>
    )
}


export default ProductCard;