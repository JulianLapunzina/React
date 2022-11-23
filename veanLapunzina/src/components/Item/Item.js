const Item = ({title, price, img, author, stock}) => {
    console.log(img)
    return (
        <>
        <div className="item-div">
            <img className="img" src={img} alt='error'/>
            <h2 className="subtitle">"{title}"</h2>
            <h3 className="treetitle">${price}</h3>
            <h3 className="treetitle">Autor: "{author}"</h3>
            <p className="treetitle">Stock: {stock} </p>
            <button className="btnCard">Comprar</button>
        </div>
        </>
    )
}
export default Item;