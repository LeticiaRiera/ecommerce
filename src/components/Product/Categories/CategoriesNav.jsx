import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import './categorie.css';

const CategoriesNav = () => {
    const menuCategories = [
        {
            producto: "Manteles",
            ruta: "/productos/manteles"
        },
        {
            producto: "Almohadones",
            ruta: "/productos/almohadones"
        },
        {
            producto: "Atrapa Sueños",
            ruta: "/productos/atrapa-suenos"
        }
    ]

    return (
        <ReactBootStrap.Nav bg="light" variant="light"  className="justify-content-center bg_CatNav" activeKey="/home">
             {
                        menuCategories.map((item, index) => {
                            return (
                    <ReactBootStrap.Nav.Item className="nav-item mr-3" key={index}>
                        <Link to={item.ruta}>{item.producto} </Link>
                    </ReactBootStrap.Nav.Item>
                            )
                        })
                    }
        </ReactBootStrap.Nav>

    )
}

export default CategoriesNav;