import ItemCount from "../ItemCount/ItemCount"

const Header = () => {
    const stock = 5;
    return (
    <>
    <header className="App-header">
    <section>
        <ItemCount stock={stock}/>
    </section>
    </header>
    </>
    )
}

export default Header;

