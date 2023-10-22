import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
        .then(respuesta => setProducto(respuesta))
        .catch(error => console.log(error))
    }, [idItem])

  return (
    <div className="itemDetailContainer">
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer