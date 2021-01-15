// import {useContext} from 'react';
// import {Store} from '../../store';


// const Cart = () => {

//     const [data, setData] = useContext(Store);

//     return (
//         <>
//             <h1>Esto es el cart</h1>

//             {
//                 data.items.map (item => <h2>{item.nombre}</h2>)
//             }
//         </>
//     )

// }

// export default Cart;



import {useContext} from 'react';
import {Store} from '../../store';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart = () => {

    const store = useContext(Store);

    const {item, deleteFromCart } = store;
  
    return (
        <div className="container">
        {item.length === 0 && <h3>No has comprado nada master!!</h3>}
        {item.length !== 0 &&
          item.map((item, i) => (
            <div className="row" key={item.id + i + Math.random()}>
              <div className="col">
                <div
                  className="card"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <img
                    src={item.imageProducto}
                    className="card-img-top"
                    style={{ width: "20%" }}
                  />
                  <div
                    className="card-body card-body-cart"
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item?.qty}</p>
                    <p className="card-text" style={{ color: "green", marginLeft: ".6rem"}}>${item.precio}</p>
                    <button
                      href="#"
                      className="btn btn-danger"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );

}

export default Cart;