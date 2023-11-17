import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  const alertaError = (event) => {
    (Swal.fire({
      title: 'Los emails ingresados no coinciden',
      html: `` + error,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido',
      background: "#721414",
      color: "#eeee",
      confirmButtonColor: "#05121b",
    })); event.preventDefault()
  };

  const [error, setError] = useState("");

  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();


  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem)

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevosProducto = { id: res.id, ...data }
        setProducto(nuevosProducto);
      })
      .catch(error => setError("Se ha producido un error", error));
  }, [idItem])


  return (
    <div className="itemDetailContainer">
      <ItemDetail {...producto} />

      {
        error && (alertaError())
      }
    </div>
  )
}

export default ItemDetailContainer