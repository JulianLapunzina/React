import data from "../Data"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [bookList, setBookList] = useState ([])

    const getBooks = new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    })

    useEffect(()=> {
        getBooks
        .then((response)=>{setBookList(response)})
    }, []);


    return(
        <section className='bookSection'>
        <ItemList list={bookList}/>
        </section>
    )
}

export default ItemListContainer;