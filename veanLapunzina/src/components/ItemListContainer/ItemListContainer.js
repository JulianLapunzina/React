import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import getBooks from "../GetBooks/getBooks";
import { useParams } from "react-router-dom";

//Componente ItemListContainer

function ItemListContainer() {

    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    


    useEffect(() => {
        if (categoryId) {
            getBooks()
            .then((response) => {
                setBookList(response.filter(prod => prod.category === categoryId));
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
        }
        else {
            getBooks()
            .then((response) => {
                setBookList(response);
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
        }
    }, [categoryId]);

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