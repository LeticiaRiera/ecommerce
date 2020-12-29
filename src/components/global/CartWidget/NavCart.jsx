import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {useState} from 'react';



const NavCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <ReactBootStrap.Button variant="primary" className="ml-2" onClick={handleShow}>
                <i className="fas fa-shopping-cart mr-1"></i>
            <span>0</span>
        </ReactBootStrap.Button>
  
        <ReactBootStrap.Modal show={show} onHide={handleClose}>
          <ReactBootStrap.Modal.Header closeButton>
            <ReactBootStrap.Modal.Title>Productos seleccionados</ReactBootStrap.Modal.Title>
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>No hay productos agregados.</ReactBootStrap.Modal.Body>
          <ReactBootStrap.Modal.Footer>
            <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
              Cerrar
            </ReactBootStrap.Button>
            <ReactBootStrap.Button variant="primary" onClick={handleClose}>
              Pagar
            </ReactBootStrap.Button>
          </ReactBootStrap.Modal.Footer>
        </ReactBootStrap.Modal>
      </>

    )
}



export default NavCart;

