import img from "../Vean-logo.png"
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <>
        <div className="App">
        <button className='btn-login'>LOGIN</button>
        <ul className='nav'>
        <li className='nav-list'>
            <a className='nav-link' href='../public/index.html'>Home</a>
            <a className='nav-link' href='../public/index.html'>Catálogo</a>
            <a className='nav-link' href='../public/index.html'>Inscripción</a>
        </li>
        </ul>
        <div className="header-div">
            <img src={img} className="logo" alt="sarasa"/>           
            <CartWidget/>
        </div>
        </div>
        </>
    )
}

export default NavBar;
