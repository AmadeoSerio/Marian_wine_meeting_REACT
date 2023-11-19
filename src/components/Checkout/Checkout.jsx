import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
import "./Checkout.css"


const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmaicon, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenID] = useState("");

    const { carrito, vaciarCarrito, total, } = useContext(CarritoContext);

    //Alertas del sweetAlert
    const alertaOrden = () => {
        (Swal.fire({
            title: '¡Gracias por comprar! Tu número de orden es: ',
            html: `` + ordenId,
            showCancelButton: false,
            confirmButtonText: 'Volver al inicio',
            background: "#f94707",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            allowOutsideClick: false,
            width: '50rem',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "/";
            }
        }))
    };

    const alertaCampos = () => {
        (Swal.fire({
            title: 'Por favor completa todos los campos para continuar',
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#f94707",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };

    const alertaMail = () => {
        (Swal.fire({
            title: 'Los emails ingresados no coinciden',
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#f94707",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };

    const alertaError = () => {
        (Swal.fire({
            title: 'Los emails ingresados no coinciden',
            html: `` + error,
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            background: "#721414",
            color: "#eeee",
            confirmButtonColor: "#05121b",
            width: '50rem',
        }));
    };


    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmaicon) {
            setError(alertaCampos())
            return;
        }

        if (email !== emailConfirmaicon) {
            setError(alertaMail());
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
                setError("No se pudo actualizar el stock", error)
            })

    }

    return (
        <div className="checkout container">
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario} className="d-flex justify-content-between">
                <div>
                    <h3 className="tituloLista">Lista de productos:</h3>
                    <hr />
                    {
                        carrito.map(producto => (
                            <div key={producto.item.id} className="d-flex gap-5">
                                <p className="precioCheckout"> ${producto.item.precio * producto.cantidad} </p>
                                <p className="listaCheckout"> {producto.item.nombre} <b>x {producto.cantidad}</b></p>
                            </div>
                        ))
                    }

                    <hr />
                    {
                        <p className="totalPagar">${total} : Total a pagar</p>
                    }
                    <h4 className="completaFormulario">Completa el formulario para finalizar la compra.</h4>
                </div>

                <div className="formulario">
                    <label>Nombre</label>
                    <input className="inputForm" type="text" onChange={(e) => setNombre(e.target.value)} />

                    <label>Apellido</label>
                    <input className="inputForm" type="text" onChange={(e) => setApellido(e.target.value)} />

                    <label>Celular</label>
                    <input className="inputForm" type="text" onChange={(e) => setTelefono(e.target.value)} />

                    <label>Email</label>
                    <input className="inputForm" type="email" onChange={(e) => setEmail(e.target.value)} />

                    <label>Confirmar Email</label>
                    <input className="inputForm" type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />

                    {
                        error && (alertaError())
                    }

                    <button type="submit" className="botonConfirmarCompra">Confirmar compra</button>

                    {
                        ordenId && (alertaOrden())
                    }
                </div>
            </form>
        </div>
    )
}

export default Checkout