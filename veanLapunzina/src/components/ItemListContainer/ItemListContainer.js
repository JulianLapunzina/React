import data from "../Data"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

//Promesa a Json

    const getBooks = ()=> {
        return new Promise ((res, rej) => {
            setTimeout(()=>{
                res(data);
                rej('allá le están trayendo los datos');
            }, 1500); 
        })
    }
//Componente ItemListContainer

function ItemListContainer() {

    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getBooks()
            .then((response) => {
                setBookList(response);
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
    }, []);

    return (
    <>
    {loading ? <h2>loading...</h2> :        
    <section className='bookSection'>
        <ItemList list={bookList}/>
    </section>}
    </>
    );
}

export default ItemListContainer;