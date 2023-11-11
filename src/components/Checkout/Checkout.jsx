import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css"


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmaicon, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenID] = useState("");

    const { carrito, vaciarCarrito, total, totalCantidad } = useContext(CarritoContext);


    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmaicon) {
            setError("Por favor completa todos los campos para continuar") ////////OTRO SWEET ALERT
            return;
        }

        if (email !== emailConfirmaicon) {
            setError("Los emails ingresados no coinciden"); /////////OTRO SWEET ALERT
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenID(docRef.id)
                        vaciarCarrito();
                    })
                    .catch(error => setError("Se produjo un error al crear la orden", error))
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se pudo actualizar el stock")
            })

    }

    return (
        <div className="checkout container">
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad}</p>
                            <p> ${producto.item.precio} </p>
                            <p> Total a pagar: ${total}</p>
                        </div>
                    ))
                }

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Celular</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p> /////////////////////////TENGO QUE AGREGARLE ESTILO TAMBIEN

                }




                <button type="submit">Confirmar compra</button>
                {/* DEBERÍA REDIRECCIONAR AL COMPRADOR AL INICIO */}




                {
                    ordenId && (
                        <strong>!Gracias por tu compra¡ Tu número de orden es: {ordenId}</strong> //////ACA PUEDE IR UN SWEET ALERT
                    )
                }
            </form>
        </div>
    )
}

export default Checkout