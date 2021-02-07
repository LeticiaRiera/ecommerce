import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import './NavBar.css';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import NavCart from '../../Cart/CartWidget/NavCart';
import {Link} from 'react-router-dom';



function NavBar(){
    return (
    <div>
        <ReactBootStrap.Navbar bg="light" variant="light" className="text-center bg_NavBar">
            <ReactBootStrap.Navbar.Brand href="#home">
            <img className="w-100" src="images/logo-puras-ñañas.png" alt="Logo Puras ñañas"/>
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="mr-auto text-center">
                <Link className="nav-link font_NavBar" to="/">Inicio</Link>
                <Link className="nav-link font_NavBar" to="/productos">Productos</Link>
            </ReactBootStrap.Nav>
                <NavCart inline/>                
        </ReactBootStrap.Navbar>
    </div>
    )
} 

export default NavBar;