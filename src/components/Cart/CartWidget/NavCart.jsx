import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {Store} from '../../../store';


const NavCart = () => {
  
  

  const [data, setData] = useContext(Store);
  const [show, setShow] = useState(false);
    
    let history = useHistory();
    
    const action = ()=>{
      setShow(!show);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleClickGoCart =(e)=>{ 
      history.push("/cart");
      action();
    }
    return (
      <>
        <ReactBootStrap.Button variant="primary" className="ml-2" onClick={handleShow}>
                <i className="fas fa-shopping-cart mr-1"></i>
                <span>{data.cantidad}</span>
        </ReactBootStrap.Button>
  
        <ReactBootStrap.Modal show={show} onHide={handleClose}>
          <ReactBootStrap.Modal.Header closeButton>
            <ReactBootStrap.Modal.Title>Productos seleccionados</ReactBootStrap.Modal.Title>
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>
            {
            data.items.map((item) =>
            <div key={item.id}>
              <div className="d-flex col-12">
                <div className="float-left mt-1 col-6">
                  <h5>Producto</h5>
                  <h6>{item?.item?.data?.titulo}</h6>
                </div>
                <div className="float-left ml-4 text-right col-6">
                  <h5>Cantidad</h5>
                  <p><b>{item.cantidad}</b></p>
                </div>
              </div>

            </div>)
          }
          </ReactBootStrap.Modal.Body>
          <ReactBootStrap.Modal.Footer>
            <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
              Cerrar
            </ReactBootStrap.Button>
            <ReactBootStrap.Button variant="primary" onClick={handleClickGoCart}>
              <Link to="/cart"></Link>
              Ir al carrito
            </ReactBootStrap.Button>
          </ReactBootStrap.Modal.Footer>
        </ReactBootStrap.Modal>
      </>

    )
}



export default NavCart;

