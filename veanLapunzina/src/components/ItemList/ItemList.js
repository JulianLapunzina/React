import Item from "../Item/Item";


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
    </>
    )
}

export default ItemList;