import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ nombre, varietal, precio, img, id }) => {
    return (
        <div className='cardProducto'>
            <img src={img} alt={nombre} />
            <div>
            <h5>{nombre}</h5>
            <h6>{varietal}</h6>
            <p>${precio}</p>
            <Link to={`/item/${id}`} ><button> Ver Detalles </button></Link>
            </div>
        </div>
    )
}

export default Item