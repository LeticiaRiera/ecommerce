import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import '../global/Nav.css'



function NavBar(){
    return (
    <div>
        <ReactBootStrap.Navbar bg="light" variant="light">
            <ReactBootStrap.Navbar.Brand href="#home">Tienda</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Inicio</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">Productos</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Ofertas</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <ReactBootStrap.Button variant="outline-primary">Buscar</ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </ReactBootStrap.Navbar>
    </div>
    )
} 

export default NavBar;