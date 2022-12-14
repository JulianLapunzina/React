import img from "../Vean-logo.png"
import cart from '../cart.svg';


const NavBar = () => {
    return (
        <>
        <div className="App">
        <button className='btn-login'>LOGIN</button>
        <ul className='nav'>
        <li className='nav-list'>
            <a className='nav-link' href='/'>Home</a>
            <a className='nav-link' href='/'>Catálogo</a>
            <a className='nav-link' href='/'>Inscripción</a>
        </li>
        </ul>
        <div className="header-div">
            <a href="/"><img src={img} className="logo" alt="sarasa"/></a>          
            <button className='btn-cart'><a href="/cart"><img src={cart} className="cart" alt="sarasa"/></a></button>
        </div>
        </div>
        <hr className='raya'></hr>
        </>
    )
}

export default NavBar;
