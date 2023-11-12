import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carritoVacio container">
                <div>
                <img src="http://drive.google.com/uc?export=view&id=18kW-y6uNvQdcdo2beUWJtVV4btwQobWj" alt="" />
                <h2>Carrito vacío</h2>
                </div>
                <Link to="/" className="botonVerProd"> Ver Productos </Link>
            </div>
        )
    }

    return (
        <div className="carritoLLeno container">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h4>Total Productos: {cantidadTotal}</h4>
            <h3>Total: ${total}</h3>
            <div className="botonesCarritoLleno">
            <Link to="/checkout" className="finalizarCompra"> Finalizar Compra </Link>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart