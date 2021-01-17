import ProductCard from './ProductCard';
import Mantel from '../../assets/products/mantel.jpg';
import AtrapaSueno from '../../assets/products/atrapa-suenos.jpg';
import Almohadones from '../../assets/products/almohadones.jpg'
import { useEffect, useState } from 'react';
import json from '../utils/productos.json';
import { useParams } from 'react-router-dom';
import ProductDetail from '../Detail/ProductDetail';



export default function ProductCardContainer ({category_name, productsArray}){
    console.log(category_name);
    console.log(productsArray);

    const productsItems = category_name ?
    productsArray.length > 0 && productsArray.filter(product => (product.categoria === category_name)) : productsArray;

    console.log("filtrados")
    console.log(productsItems)
    
    
    return (
    <section>
        <div className="container">
        <h2 className="text-center mt-2">Productos destacados</h2>

        {
            productsArray.length ?
            <>
            <div>
                {
                    ( productsItems.map((productsArray, index) => 
                        <div key={productsArray.id}>
                            <ProductCard
                            id={productsArray.id}
                            imagenProducto={productsArray.imagenProducto}
                            titulo={productsArray.titulo}
                            precio={productsArray.precio} />
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
            
            // <div>
            //     {
            //         ( items.map((item, index) => 
            //             <div key={item.id}>
            //                 <ProductCard
            //                 id={item.id}
            //                 imagenProducto={item.imagenProducto}
            //                 titulo={item.titulo}
            //                 precio={item.precio} />
            //             </div>
            //          ))
            //     }
            // </div>
            // </ProductDetail>:
            // <div className="d-flex justify-content-center mt-4">
            //     <div className="alert alert-success col-4 p-4" role="alert">
            //         <strong>Espera un instante! </strong> Cargando productos.
            //     </div>
            // </div>
        }

        </div>
    </section>
    )
}