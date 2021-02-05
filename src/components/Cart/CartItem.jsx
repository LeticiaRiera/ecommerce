import 'bootstrap/dist/css/bootstrap.min.css';


const CartItem = (props) => {
return(

<>
<tr className="text-center">
                    <td>-</td>
                    <td>{props.titulo}</td>
                    <td>{props.cantidad}</td>
                    <td>{props.unidad}</td>
                    <td>{props.precioTotalProducto}</td>
                    <td><button className="btn btn-danger" onClick={props.eventDeleteItem}>X</button></td>
                </tr>
                <tr>
                   <td>{props.precioTotal}</td> 
                </tr>  
</>  

)
}

export default CartItem;