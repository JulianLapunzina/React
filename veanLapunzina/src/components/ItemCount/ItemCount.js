import { useState } from "react";
import Swal from "sweetalert2";


const ItemCount = ({stock}) => {
    const [initialState, setInitialState] = useState(0);


    const suma = () => initialState <= stock -1 ? setInitialState(initialState + 1) : Swal.fire({title: 'Se alcanzó el máximo de items disponibles'})
    
    const resta = () => initialState > 0 ? setInitialState(initialState - 1) : Swal.fire('Agregue un producto al carrito para continuar')

    const addCart = () => initialState <= 0 ? Swal.fire('Necesita agregar un producto') : Swal.fire({title: `Agregaste ${initialState} producto/s al carrito`,
    color: 'black', background: 'white'})

    return (
        <>
        <div className="counterDiv">
            <h2 style={{color: 'white'}}>Books</h2>
            <p className="counter-P">Total: {initialState}</p>
            <p className="counter-P">Stock Disponible: {stock}</p>
            <button onClick={suma} className='btn-count'>
                +
            </button>
            <button onClick={resta} className='btn-count'>
                -
            </button>
            <button onClick={addCart} className='btn-count'>
                    Add to cart
            </button>
        </div>
        </>
    )}

export default ItemCount;