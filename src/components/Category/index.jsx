  
import {useEffect} from 'react';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    const {category_name} = useParams();

    const identificarCategoria = (cat) => {
        switch(cat) {
            case 'manteles': return <p>Categoría <b>Manteles</b></p>;
            case 'almohadones': return <p>Categoría <b>Almohadones</b></p>;
            case 'atrapa-suenos': return <p>Categoría <b>Atrapa sueños</b></p>
            default: return <p>Categoría no encontada</p>
        }
    }

    return (
        <>
            {
               identificarCategoria(category_name) 
            }
        </>
    )
}
export default Category;