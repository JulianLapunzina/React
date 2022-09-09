import cart from './cart.svg';

const CartWidget = () => {
    return (
        <div className='cart-div'>
            <button className='btn-cart'><img src={cart} className="cart"></img></button>
        </div>
    )
}

export default CartWidget
