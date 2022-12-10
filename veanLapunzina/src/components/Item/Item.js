const Item = ({title, price, img, author, stock}) => {
    return (
        <>
        <div className="item-div">
            <img className="img" src={img} alt='error'/>
            <h2 className="subtitle">"{title}"</h2>
            <h3 className="treetitle">${price}</h3>
            <h3 className="treetitle">Autor: "{author}"</h3>
            <h3 className="stock"> Stock: {stock}</h3>
            <button className="btnCard">Add to Cart</button>
        </div>
        </>
    )
}
export default Item;