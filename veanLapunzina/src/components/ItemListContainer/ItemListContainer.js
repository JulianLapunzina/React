import data from "../Data"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

//Promesa a Json

    const getBooks = ()=> {
        return new Promise ((res, rej) => {
            setTimeout(()=>{
                res(data);
                rej('allá le están trayendo los datos');
            }, 500); 
        })
    } 
//Componente ItemListContainer

const ItemListContainer = () => {

const [bookList, setBookList] = useState ([])

useEffect(()=> {
getBooks()
.then((response)=>{
setBookList(response)
})
.catch(err => console.log(err))
}, []);   

return(
        <section className='bookSection'>
        <ItemList list={bookList}/>
        </section>
    )
};

export default ItemListContainer;