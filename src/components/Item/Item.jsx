import "./Item.css"

const Item = ({ nombre, varietal, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img src={img} alt={nombre} />
            <h5>{nombre}</h5>
            <h6>{varietal}</h6>
            <p>${precio}</p>
            <button> Ver Detalles </button>
        </div>
    )
}

export default Item