import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';


const ProductCard = (props) => {
    console.log(props)

    

    return (
    <div>
        {
            productItems ?
            productItems.length && productItems.map((products) => {
                return (
                    <div key={products.id}>
                        <div>
                            <img src={products.imagenProducto} alt={products.alt}/>
                        </div>
                        <div>
                            <span>{products.titulo}</span>
                            <span>{products.descripcion}</span>
                        </div>
                        <div>
                            <span>${products.precio}</span>
                        </div>
                        <div>
                            <Link to={`/detail/${products.id}`}>Ver producto</Link>
                        </div>
                    </div>
                )
            }) :
            <p>Cargando productos...</p>
        }


  {/* <ReactBootStrap.Container>
      <ReactBootStrap.Col className="col-lg-3 col-sm-12 mb-4 mt-4 float-left">
        <ReactBootStrap.Card style={{ width: '100%' }}>
<<<<<<< HEAD
            <ReactBootStrap.Card.Img variant="top" src={props.imageProducto} alt={props.altImagenProducto} />
=======
            <ReactBootStrap.Card.Img variant="top" src={props.imagenProducto} alt={props.alt} />
>>>>>>> fix
            <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>{props.nombre}</ReactBootStrap.Card.Title>
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
</ReactBootStrap.Container> */}

</div>
    )
}


export default ProductCard;