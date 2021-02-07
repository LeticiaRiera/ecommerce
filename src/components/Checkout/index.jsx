import {useState, useContext} from 'react';
import {Store} from '../../store';
import {getFirestore} from '../../db';
import firebase from 'firebase/app';
import './checkout.css';

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        provincia: '',
        ciudad: '',
        direccion: '',
        numeroDireccion: '',
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
                    <div className="col-12 checkout_Background mt-4">
                    <h2>Checkout</h2>
                            <form onSubmit={handleSubmitForm} className="col-12">
                                <div class="form-group">
                                    <div className="col-12">
                                    <input type="text" class="form-control col-5 float-left mb-2 mr-2" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                                    <input type="text" class="form-control col-5 float-left mb-2" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido"/>
                                    </div>
                                    <div className="col-12">

                                    </div>
                                    <div className="col-12">
                                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="Email"  class="form-control col-5 float-left mb-2 mr-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <input type="tel" value={formData.telefono} onChange={handleChangeInput} name="telefono" placeholder="Teléfono"  class="form-control col-5 float-left mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div  className="col-12">
                                        <input type="text" class="form-control col-5 float-left mb-2 mr-2" value={formData.provincia} onChange={handleChangeInput} name="provincia" placeholder="Provincia"/>
                                        <input type="text" class="form-control col-5 float-left mb-2" value={formData.ciudad} onChange={handleChangeInput} name="ciudad" placeholder="Ciudad"/>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" class="form-control col-5 float-left mb-2 mr-2" value={formData.direccion} onChange={handleChangeInput} name="direccion" placeholder="Dirección"/>
                                        <input type="text" class="form-control col-5 float-left mb-2 mr-2" value={formData.numeroDireccion} onChange={handleChangeInput} name="numeroDireccion" placeholder="Número"/>
                                    </div>
                                </div>
                              <button type="submit" class="btn btn-primary col-10">Enviar</button>
                            </form>
                        </div>
                    :
                    <div className="col-12 checkout_Background mt-4">
                        <p>Compra realizada con éxito, tu número de seguimiento es: <b>{idCompra}</b></p>
                    </div>
                    
                }
            </div>
        </section>
    )
}

export default Checkout;