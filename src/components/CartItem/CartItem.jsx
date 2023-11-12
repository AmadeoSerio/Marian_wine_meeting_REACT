import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import "./CartItem.css"


const CartItem = ({item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext)

    return (
        <>
        <div className="d-flex gap-5 carritoDetalle">
            <div className="d-flex gap-5">
            <img src={item.img} alt="" />
            <div>
            <h5> {item.nombre} </h5>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: ${item.precio}</p>
            </div>
            </div>
            <button onClick={() => eliminarProducto(item.id)} className="botonEliminarCarrito"> Eliminar </button>
        </div>
            <hr />
        </>
    )
}

export default CartItem