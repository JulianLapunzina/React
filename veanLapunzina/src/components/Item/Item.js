const Item = ({title, price, img, author}) => {
    console.log(img)
    return (
        <div className="Item-div">
            <img src={img} alt='error'/>
            <h2>"{title}"</h2>
            <h3>${price}</h3>
            <h3>Autor: "{author}"</h3>
        </div>
    )
}
export default Item;