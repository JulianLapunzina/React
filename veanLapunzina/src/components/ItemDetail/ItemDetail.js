import ItemDos from "../ItemDos/ItemDos";


const ItemDetail = ({item}) => {
    return (
    <>
        {item.map((book)=> (
            <div key={book.name}>
                <ItemDos
                title={book.title}
                price={book.price}
                img={book.img} 
                nombre={book.name}
                />
            </div>
            ))
        }
    </>
    );
};

export default ItemDetail
