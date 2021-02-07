import ProductCard from './ProductCard';


export default function ProductCardContainer ({category_name, productsArray}){

    const productsItems = category_name ?
    productsArray.length > 0 && productsArray.filter(product => (product.data.categoria === category_name)) : productsArray;

    return (
    <section>
        <div className="container">

        {
            productsItems.length ?
            <>

            <div>
                {
                    ( productsItems.map((productsArray, i) => 
                        <div key={productsArray.id + i + Math.random}>
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