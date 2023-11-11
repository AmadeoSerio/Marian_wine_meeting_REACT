import { useState, useEffect } from "react";
// import { getUnProducto } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import './ItemDetailContainer.css'



const ItemDetailContainer = () => {

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
      .catch(error => console.log(error));
  }, [idItem])

  // useEffect(() => {
  //     getUnProducto(idItem)
  //     .then(respuesta => setProducto(respuesta))
  //     .catch(error => console.log(error))
  // }, [idItem])

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer