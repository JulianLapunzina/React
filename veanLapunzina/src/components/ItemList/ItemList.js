import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({list}) => {
    return (
    <>
    <div className="containerItems">

    {list.map((book)=> (
    <div key={book.id}>
        <Item id={book.id}
        title={book.title}
        price={book.price}
        img={book.img}
        author={book.author}
        />
    </div>
    ))
    }
    </div>
    </>
    )
}

export default ItemList;