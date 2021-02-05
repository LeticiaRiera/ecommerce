import {useState, useContext} from 'react';
import {Store} from '../../store';
import {getFirestore} from '../../db';
import firebase from 'firebase/app';
import * as ReactBootStrap from "react-bootstrap";



const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
    })
    const [idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

    return (
        <section className="container">
            <div className="row">

                {
                    !venta ?
                    <div className="col-12">
                    <h2>Checkout</h2>
                            <form onSubmit={handleSubmitForm} className="col-8">
                                <div class="form-group">
                                    <label for="exampleInputNombre">Nombre</label>
                                    <input type="text" class="form-control" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                                    <label for="exampleInputNombre">Apellido</label>
                                    <input type="text" class="form-control" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido"/>
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="Email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <label for="exampleInputEmail1">Teléfono</label>
                                    <input type="tel" value={formData.telefono} onChange={handleChangeInput} name="telefono" placeholder="Teléfono"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <label for="exampleInputNombre">Dirección</label>
                                    <input type="text" class="form-control" value={formData.direccion} onChange={handleChangeInput} name="direccion" placeholder="Dirección"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                {/* <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div> */}
                              <button type="submit" class="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    :
                    <p>Compra realizada con éxito, tu número de seguimiento es: {idCompra}</p>
                }
            </div>
        </section>
    )
}

export default Checkout;