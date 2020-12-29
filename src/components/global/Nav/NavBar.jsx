import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import NavCart from '../CartWidget/NavCart';
import {Link} from 'react-router-dom';



function NavBar(){
    return (
    <div>
        <ReactBootStrap.Navbar bg="light" variant="light">
            <ReactBootStrap.Navbar.Brand href="#home">Tienda</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="mr-auto">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link" to="/category/manteles">Manteles</Link>
                <Link className="nav-link" to="/category/almohadones">Almohadones</Link>
                <Link className="nav-link" to="/category/atrapa-suenos">Atrapa Sueños</Link>
            </ReactBootStrap.Nav>

            <ReactBootStrap.Form inline>
                <ReactBootStrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                <ReactBootStrap.Button variant="outline-primary">Buscar</ReactBootStrap.Button>
                
                <NavCart/>
                
            </ReactBootStrap.Form>
        </ReactBootStrap.Navbar>
    </div>
    )
} 

export default NavBar;