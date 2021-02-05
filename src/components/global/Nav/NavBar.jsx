import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import NavCart from '../../Cart/CartWidget/NavCart';
import {Link} from 'react-router-dom';



function NavBar(){
    return (
    <div>
        <ReactBootStrap.Navbar bg="light" variant="light" className="text-center
        ">
            <ReactBootStrap.Navbar.Brand href="#home">Tienda</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="mr-auto">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link" to="/productos">Productos</Link>
                {/* <Link className="nav-link" to="/productos/manteles">Manteles</Link>
                <Link className="nav-link" to="/productos/almohadones">Almohadones</Link>
                <Link className="nav-link" to="/productos/atrapa-suenos">Atrapa Sueños</Link> */}
            </ReactBootStrap.Nav>
                <NavCart inline/>                
        </ReactBootStrap.Navbar>
    </div>
    )
} 

export default NavBar;