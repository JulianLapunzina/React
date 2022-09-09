import data from "../Data"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [bookList, setBookList] = useState ([])

    useEffect(()=> {
        getBooks.then((response)=>{
            setBookList(response);
        });
    }, []);

    const getBooks = new Promise ((resolve,reject) => {
            setTimeout(()=>{
                resolve(data);
            }, 2000);
        })

    return(
        <ItemList list={bookList}/>
    )
}

export default ItemListContainer;