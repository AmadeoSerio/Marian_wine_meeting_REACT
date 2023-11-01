import { useState } from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.css';

const ItemDetail = ({ id, stock, nombre, precio, varietal, img, descripcion }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        
        const item = {id, nombre, varietal, precio};
        agregarAlCarrito(item, cantidad);
      }

    return (
        <div className='itemStyle'>
            <img src={img} alt={nombre} />
            <div className='itemDetail'>
                <h2> {nombre} </h2>
                <h3> Varietal: {varietal} </h3>
                <h4> Precio: ${precio} </h4>
                <h5> ID: {id} </h5>
                <p>{descripcion}</p>
            </div>
            <div>
                {
                    agregarCantidad > 0 ? (<Link to="/cart" className='botonTerminarCompra'>Terminar compra</Link>) : (<Counter inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail