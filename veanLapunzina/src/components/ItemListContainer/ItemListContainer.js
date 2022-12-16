import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import getBooks from "../GetBooks/getBooks";

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