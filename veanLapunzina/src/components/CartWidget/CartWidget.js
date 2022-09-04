import cart from './cart.svg';

const CartWidget = () => {
    return (
        <div className='cart-div'>
            <img src={cart} className="cart"></img>
        </div>
    )
}

export default CartWidget