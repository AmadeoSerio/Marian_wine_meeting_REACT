import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"


const CartItem = ({item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext)

    return (
        <div>
            <h5> {item.nombre} </h5>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: {item.precio}</p>
            <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem