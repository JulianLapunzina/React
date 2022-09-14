import img from "../Vean-logo.png"
import CartWidget from "../CartWidget/CartWidget";

// const showCart = () => {
    
// }

const NavBar = () => {
    return (
        <div className="header-div">
            <img src={img} className="logo"></img>            
            <CartWidget/>
        </div>
    )
}

export default NavBar;

//showCart={() => {}}