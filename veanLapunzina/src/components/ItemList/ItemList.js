import Item from "../Item/Item";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({list}) => {
    return (
        <>
        <div className="containerItems">
        {list.map((book)=> (
        <div key={book.id}>
            <Item 
            title={book.title}
            price={book.price}
            img={book.img}
            author={book.author}
            stock={book.stock}
            />
        </div>
        ))
        }
        </div>
        <div>
        <ItemDetail list={list}/>
        </div>
    </>
    )
}

export default ItemList;