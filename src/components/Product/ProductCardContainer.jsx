import ProductCard from './ProductCard';
import Mantel from '../../assets/products/mantel.jpg';
import AtrapaSueno from '../../assets/products/atrapa-suenos.jpg';
import Almohadones from '../../assets/products/almohadones.jpg'
import { useEffect, useState } from 'react';
import {getFirestore} from '../../db'; 
import CountContainer from '../Detail/CountButton/CountButton';


export default function ProductCardContainer ({category_name, productsArray, stock, itemQuantity, modifyItemQuantity}){
    console.log(category_name);
    console.log(productsArray);
    const db = getFirestore();

    const productsItems = category_name ?
    productsArray.length > 0 && productsArray.filter(product => (product.categoria === category_name)) : productsArray;

    // console.log("filtrados")
    // console.log(productsItems)
    const addItem = () => {
        modifyItemQuantity(itemQuantity + 1);
    }
    const removeItem = () => {
        modifyItemQuantity(itemQuantity - 1);
    }
    
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
                            imagenProducto={productsArray.imagenProducto}
                            titulo={productsArray.titulo}
                            precio={productsArray.precio} />
                        </div>
                     ))
                }
                <CountContainer stock={stock} initial={itemQuantity} onAdd={addItem} onRemove={removeItem} />
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