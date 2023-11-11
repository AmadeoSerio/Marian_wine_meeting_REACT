import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="carritoVacio">Carrito vacío</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div className="carritoLLeno container">
            {
                carrito.map(producto => <CartItem key={producto.id} {...producto} />)
            }
            <h3>Total: ${total}</h3>
            <h4>Cantidad Total: {cantidadTotal}</h4>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart