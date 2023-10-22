import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, varietal, img, descripcion }) => {
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
        </div>
    )
}

export default ItemDetail