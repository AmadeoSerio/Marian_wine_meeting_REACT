import { useState, useEffect } from 'react';
import { getProductos, getVarietal } from "../../asyncmock";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList.jsx"

import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const img = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBAkbNWekJ9omGl22Vw9ucaKcwjftfKfRdLa3wbjNrE8xfTZw6atNFJtKEGQo55yAt6fmXDR31w9MeCRKBHuE49-zasrQ=s2560"
  
  const [productos, setProductos] = useState([])

  const {varietalCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = varietalCategoria ? getVarietal : getProductos;
    funcionProductos(varietalCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))

  }, [varietalCategoria])

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