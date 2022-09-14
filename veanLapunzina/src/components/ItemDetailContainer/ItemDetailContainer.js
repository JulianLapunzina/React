import { useEffect, useState } from "react"
import data from '../Data'
import ItemDetail from "../ItemDetail/ItemDetail";




const ItemDetailContainer = () => {
    const [bookList, setBookList] = useState ([])

    useEffect(()=> {
        getItem
        .then((response)=>{setBookList(response)})
    }, []);


    const getItem = new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    })
    

    return (
        <>
            <h1>Lista Libros</h1>
            <ItemDetail item={bookList}/>
        </>
        )

}


export default ItemDetailContainer
