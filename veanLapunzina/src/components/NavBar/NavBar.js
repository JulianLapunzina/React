import img from "../../images/Vean-logo.png"
import CartWidget from "../CartWidget/CartWidget";

const showCart = () => {
    
}

const NavBar = () => {
    return (
        <div className="header-div">
            <img src={img} className="logo"></img>            
            <CartWidget showCart={() => {}}/>
        </div>
    )
}

export default NavBar;