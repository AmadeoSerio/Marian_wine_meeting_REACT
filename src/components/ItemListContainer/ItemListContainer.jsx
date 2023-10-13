import { useState, useEffect } from 'react';
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList.jsx"

import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const img = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBAkbNWekJ9omGl22Vw9ucaKcwjftfKfRdLa3wbjNrE8xfTZw6atNFJtKEGQo55yAt6fmXDR31w9MeCRKBHuE49-zasrQ=s2560"

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
  }, [])

  return (
    <>

      <div className='d-flex container greeting'>
        <img src={img} alt="logo de wine meeting" />
        <h1 className='tituloGreeting'> {greeting} </h1>
      </div>

        <ItemList productos={productos} />

    </>
  )
}

export default ItemListContainer