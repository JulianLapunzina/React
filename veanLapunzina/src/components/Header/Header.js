import ItemCount from "../ItemCount/ItemCount"
import logo from './logo.svg';

const Header = () => {
    const stock = 5;
    return (
    <>
    <header className="App-header">
    <section>
        <ItemCount stock={stock}/>
    </section>
    <section>
        <img src={logo} className="App-logo" alt="logo"/>
    </section>
    </header>
    </>
    )
}

export default Header;

