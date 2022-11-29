const ItemDetail = ({list}) => {
    const itemUno = list[0];
    return (
        <div className='item-div'>
            <h1> ESTE ES UN SOLO OBJETO. PODRÍA TRAER CUALQUIERA DE LOS 3</h1>
            <img className='img' src={itemUno.img} alt='error'/>    
            <h2 className='subtitle'>{itemUno.title}</h2>
            {itemUno.author}
            {itemUno.stock}
            {itemUno.price}        
        </div>
    )
}
export default ItemDetail;