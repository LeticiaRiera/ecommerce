import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';


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

        {
            productsItems.length ?
            <>
            <h2 className="text-center mt-2">Productos destacados</h2>
            <div>
                {
                    ( productsItems.map((productsArray, index) => 
                        <div key={productsArray.id}>
                            <ProductCard
                            id={productsArray.id}
                            imagenProducto={productsArray.data.imagenProducto}
                            titulo={productsArray.data.titulo}
                            precio={productsArray.data.precio} />
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