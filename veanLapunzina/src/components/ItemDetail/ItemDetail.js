import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import getBooks from "../GetBooks/getBooks";
import { useParams } from "react-router-dom";

const ItemDetail = () => {

const [product, setProduct] = useState([])
const {productId} = useParams()


useEffect(()=> {
    getBooks()
    .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
    .catch(err=>console.log(err))
}, [])

console.log(setProduct)
return (
    <div className='itemDetail'>
        <h1> {product.title}</h1>
        <img className='img' src={product.img} alt='error'/>
        <h2 className='subtitle'>{product.author}</h2>
        {product.price}
        <ItemCount stock={product.stock}/>
        </div>
)
}

export default ItemDetail;