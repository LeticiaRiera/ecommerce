import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import ProductDetail from './ProductDetail';
// import {products} from '../../products';
import Mantel from '../../assets/products/mantel.jpg';
import AtrapaSueno from '../../assets/products/atrapa-suenos.jpg';
import Almohadones from '../../assets/products/almohadones.jpg';
import {getFirestore} from '../../db'; 




const Detail = (    ) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    // const db = getFirestore();


    // const getProductsFromDB = () => {
    //     db.collection('productos').get()
    //     .then(docs => {
    //         console.log(docs);
    //         let arr = [];
    //         docs.forEach(doc => {
    //             arr.push({id: doc.id, data: doc.data()})
    //         })
    //         console.log(arr);

    //         setProduct(arr);
    //     })
    //     .catch(e => console.log(e))
    // }

    const products = [
        {
            id: 1,
            titulo: "Mantel antimanchas",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 800 ,
            categoria : "manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 2,
            titulo: "Mantel antimanchas 2",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 700 ,
            categoria : "manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 3,
            titulo: "Mantel antimanchas 3",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 750 ,
            categoria : "manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 4,
            titulo: "Mantel antimanchas 4",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 650 ,
            categoria : "manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 5,
            titulo: "Atrapa sueños" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 400,
            categoria : "atrapa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 6,
            titulo: "Atrapa sueños 2" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 450,
            categoria : "atrapa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 7,
            titulo: "Atrapa sueños 3" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 500,
            categoria : "atrapa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 8,
            titulo: "Atrapa sueños 4" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 350,
            categoria : "atrapa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 9,
            titulo: "Almohadones" ,
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 500,
            categoria : "almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 10,
            titulo: "Almohadones 2",
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 550,
            categoria : "almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 11,
            titulo: "Almohadones 3",
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 650,
            categoria : "almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        },
        {
            id: 12,
            titulo: "Almohadones 4",
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 550,
            categoria : "almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
            stock: 5
        }
    ]


    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            // console.log(items);

            resolve ({
                
                id: products[id - 1].id,
                titulo: products[id - 1].titulo,
                categoria: products[id - 1].categoria,
                imagenProducto: products[id - 1].imagenProducto,
                alt: products[id - 1].alt,
                descripcion: products[id - 1].descripcion,
                precio: products[id - 1].precio,
                stock: products[id - 1].stock
            })
        }, 700);
    });

    useEffect(() => {
        // getProductsFromDB();
        getProducts
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
        {
            product ?
            <div className="container">
                <div className="row">
                    {/* Esto es para hacer un bredcrum */}
                    {/* <div className="col-12">
                        <ol>
                            <li>
                                <Link to={`/${product.category}`}>{product.category.split('-').join(' ')}</Link>
                            </li>
                            <li>
                                {product.title}
                            </li>
                        </ol>
                    </div> */}

                    <div className="col-12">
                        <ProductDetail item={product} />
                    </div>
                </div>
            </div> :
            <p>Cargando productos...</p>
        }
            
        </>
    )
}

export default Detail;