import Item from "../Item/Item";

const ItemList = ({list}) => {
    return (
    <div>
        {list.map((book)=> (
            <div key={book.id}>
                <Item 
                title={book.title}
                price={book.price}
                img= {book.img}
                />
            </div>
            ))
        }
    </div>
    );
};

export default ItemList;