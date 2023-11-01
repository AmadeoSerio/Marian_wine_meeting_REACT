import { useState } from "react";
import './Counter.css';

const Counter = ({stock, inicial, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }
    

  return (
    <div className="botones">
        <button onClick={restarContador} className="botonRestar"> <i className="fa-solid fa-square-minus"></i> </button>
        <strong className="contador"> {contador} </strong>
        <button onClick={sumarContador} className="botonSumar"> <i className="fa-solid fa-square-plus"></i> </button>
    <button onClick={()=> funcionAgregar(contador)} className="botonAgregarCarrito">Agregar al carrito</button>
    </div>
  )
}

export default Counter