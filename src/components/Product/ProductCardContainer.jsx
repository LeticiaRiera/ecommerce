import ProductCard from './ProductCard';
import Mantel from '../../assets/products/mantel.jpg';
import AtrapaSueno from '../../assets/products/atrapa-suenos.jpg';
import Almohadones from '../../assets/products/almohadones.jpg'
import { useEffect, useState } from 'react';


export default function ProductCardContainer (){
    
    const [items, setItems] = useState([])

    const products = [
        {
            id: 1,
            titulo: "Mantel antimanchas",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 800 ,
            categoria : "Manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 2,
            titulo: "Mantel antimanchas 2",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 700 ,
            categoria : "Manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 3,
            titulo: "Mantel antimanchas 3",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 750 ,
            categoria : "Manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 4,
            titulo: "Mantel antimanchas 4",
            imagenProducto: Mantel,
            alt: "Mantel antimanchas",
            precio: 650 ,
            categoria : "Manteles" ,
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 5,
            titulo: "Atrapa sueños" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 400,
            categoria : "Atrepa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 6,
            titulo: "Atrapa sueños 2" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 450,
            categoria : "Atrepa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 7,
            titulo: "Atrapa sueños 3" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 500,
            categoria : "Atrepa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 8,
            titulo: "Atrapa sueños 4" ,
            imagenProducto: AtrapaSueno,
            alt: "Atrapa sueños",
            precio: 350,
            categoria : "Atrepa-suenos",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 9,
            titulo: "Almohadones" ,
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 500,
            categoria : "Almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 10,
            titulo: "Almohadones 2",
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 550,
            categoria : "Almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 11,
            titulo: "Almohadones 3",
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 650,
            categoria : "Almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        },
        {
            id: 12,
            titulo: "Almohadones 4",
            imagenProducto: Almohadones,
            alt: "Almohadones",
            precio: 550,
            categoria : "Almohadones",
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam"
        }
    ]

    const getProducts = new Promise ((resolve, reject) =>{
        setTimeout(()=> {
            resolve(products);
        }, 700)
    })
    
    useEffect (() =>{
        getProducts.then(rta => setItems(rta));

    },[]);

    
    
    return (
    <section>
        <div className="container">

        {
            items.length ?
            <>
            <h2 className="text-center mt-2">Productos destacados</h2>
            <div>
                {
                    ( items.map((item, index) => 
                        <div key={item.id}>
                            <ProductCard
                            id={item.id}
                            imagenProducto={item.imagenProducto}
                            titulo={item.titulo}
                            precio={item.precio} />
                        </div>
                     ))
                }
            </div>
            </>:
            <div className="d-flex justify-content-center mt-4">
                <div className="alert alert-success col-4 p-4" role="alert">
                    <strong>Espera un instante! </strong> Cargando productos.
                </div>
            </div>
        }

        </div>
    </section>
    )
}