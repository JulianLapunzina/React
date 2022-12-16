import img from "../Vean-logo.png"
import cart from '../cart.svg';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <div className="App">
        <button className='btn-login'>LOGIN</button>
        <ul className='nav'>
        <li className='nav-list'>
            <Link to={'/'} className='nav-link' href='/'>Home</Link>
            <Link to={'/'} className='nav-link' href='/'>Catálogo</Link>
            <Link to={'/'}className='nav-link' href='/'>Inscripción</Link>
        </li>
        </ul>
        <div className="header-div">
            <Link to={'/'}><img src={img} className="logo" alt="sarasa"/></Link>          
            <Link to={'/cart'} className='btn-cart'><img src={cart} className="cart" alt="sarasa"/></Link>
        </div>
        </div>
        <hr className='raya'></hr>
        </>
    )
}

export default NavBar;
