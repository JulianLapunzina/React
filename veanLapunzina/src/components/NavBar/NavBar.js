import img from "../Vean-logo.png"
import cart from '../cart.svg';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <div className="App">
        <button className='btn-login'>LOGIN</button>
        <ul className='nav'>
        <li className='nav-list'>
            <NavLink to={'/'} className='nav-link' href='/'>Home</NavLink>
            <NavLink to={'/'} className='nav-link' href='/'>Catálogo</NavLink>
            <NavLink to={'/'}className='nav-link' href='/'>Inscripción</NavLink>
        </li>
        </ul>
        <div className="header-div">
            <Link to={'/'}><img src={img} className="logo" alt="sarasa"/></Link>          
            <NavLink to={'/cart'} className='btn-cart'><img src={cart} className="cart" alt="sarasa"/></NavLink>
        </div>
        </div>
        <hr className='raya'></hr>
        </>
    )
}

export default NavBar;
