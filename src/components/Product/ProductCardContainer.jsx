import ProductCard from './ProductCard';
import Mantel from '../../assets/images/mantel.jpg';
import AtrapaSueno from '../../assets/images/atrapa-suenos.jpg';
import Almohadones from '../../assets/images/almohadones.jpg'
import { useEffect, useState } from 'react';


export default function ProductCardContainer (){
    
    const [items, setItems] = useState([])

    const products = [
        {
            id: 1,
            titulo: 'Mantel antimanchas',
            precio: '$800',
            imagenProducto: Mantel, 
        },
        {
            id: 2,
            titulo: 'Atrapa suenños',
            precio: '$500',
            imagenProducto: AtrapaSueno, 
        },
        {
            id: 3,
            titulo: 'Almohadones',
            precio: '$600',
            imagenProducto: Almohadones, 
        },
        {
            id: 4,
            titulo: 'Almohadones',
            precio: '$700',
            imagenProducto: Almohadones, 
        },
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