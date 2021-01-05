import {Link} from 'react-router-dom';
import Mantel from '../../../assets/images/mantel.jpg';
const ItemList = ({productsArray, productsCategory}) => {

    const productsItems = productsCategory ?
    productsArray.length > 0 && productsArray.filter (product => (product.categoria === productsCategory)) : productsArray;

    return (
        <>
            {
                productsItems ?
                productsItems.length && productsItems.map((product) => {
                    return (
                        <div key={product.id} >
                            <div >
                                <img src={product.imageProducto} alt={product.alt}/>
                            </div>
                            <div>
                                <span >{product.titulo}</span>
                                <span >{product.descripcion}</span>
                            </div>
                            <div>
                                <span>$ ${product.precio}</span>
                            </div>
                            <div>
                                <Link to={`/detail/${product.id}`}>Ver producto</Link>
                            </div>
                        </div>
                    )
                }) :
                <p>Cargando productos</p>
            }
        </>
    )
}

export default ItemList;
