import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList.jsx"
import { db } from '../../services/config.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
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

  const [error, setError] = useState("");

  const img = "http://drive.google.com/uc?export=view&id=1ipeT161_1BPgyOdxuGi1M3vfFW6x6TR9"

  const [productos, setProductos] = useState([])

  const { varietalCategoria } = useParams();

  useEffect(() => {
    const misProductos = varietalCategoria ? query(collection(db, "inventario"), where("varietal", "==", varietalCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => setError("Se ha producido un error", error));
  }, [varietalCategoria])

  return (
    <>
      <div className='d-flex container greeting'>
        <img src={img} alt="logo de wine meeting" />
        <h1 className='tituloGreeting'> {greeting} </h1>
      </div>

      <ItemList productos={productos} />

      {
        error && (alertaError())
      }
    </>
  )
}

export default ItemListContainer