import data from "../Data"
import { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {

    const getFetch = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data[0]);
        }, 2000);
    });

getFetch.then((response => {
    const item = response.json()
    console.log(item)
})) 

    useEffect(()=> {
        setTimeout((item)=>{
            console.log(item)
            return (
            <div className='itemDetail'>
                <h1> ESTE ES UN SOLO OBJETO. PODRÍA TRAER CUALQUIERA DE LOS 3</h1>
                <img className='img' src={item.img} alt='error'/>     
                <h2 className='subtitle'>{item.title}</h2>
                {item.price}
                <ItemCount stock={item.stock}/>        
            </div>
            )
        }, 2500)
    })

}
export default ItemDetail;