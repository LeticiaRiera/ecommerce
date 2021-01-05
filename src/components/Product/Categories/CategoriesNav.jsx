import Container from '../../global/Container/Container';
import {Link} from 'react-router-dom';

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
        <nav>
            <Container>
                <ul>
                    {
                        menuCategories.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.ruta}>{item.producto} </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
        </nav>
    )
}

export default CategoriesNav;