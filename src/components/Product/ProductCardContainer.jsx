import ProductCard from './ProductCard';
import Mantel from '../../assets/images/mantel.jpg';
import AtrapaSueno from '../../assets/images/atrapa-suenos.jpg';
import Almohadones from '../../assets/images/almohadones.jpg'

export default function ProductCardContainer (){
    return (
    <>

    <ProductCard imagenProducto={Mantel} alt="Mantel antimanchas" titulo="Mantel antimanchas" descripcion="Medidas:  1.80 x 1.40" precio="$800" />
    <ProductCard imagenProducto={AtrapaSueno} alt="Atrapa sueños" titulo="Atrapa sueños" descripcion="Descripción producto" precio="$500" />
    <ProductCard imagenProducto={Almohadones} alt="Almohadones" titulo="Almohadones" descripcion="Descripción producto" precio="$900" />
    <ProductCard imagenProducto={Almohadones} alt="Almohadones" titulo="Almohadones" descripcion="Descripción producto" precio="$900" />
    </>
    )
}