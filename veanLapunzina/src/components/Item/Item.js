import { Link } from "react-router-dom";

const Item = ({ id, title, price, img, author}) => {
    return (
        <>
        <div className="item-div">
            <img className="img" src={img} alt='error'/>
            <h2 className="subtitle">"{title}"</h2>
            <h3 className="treetitle">${price}</h3>
            <h3 className="treetitle">Autor: "{author}"</h3>
            <Link to={`/detail/${id}`} className="btnCard">Detalle del producto</Link>
        </div>
        </>
    )
}
export default Item;