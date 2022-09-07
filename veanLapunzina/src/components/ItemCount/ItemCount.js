import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = () => {
    const [initialState, setInitialState] = useState(0);

    const suma = () => {
        setInitialState(initialState + 1);
    }
    
    const resta = () => {
        setInitialState(initialState - 1); 
    }

    const addCart = () => {
        console.log('Agregaste x producto')
        Swal.fire({title: 'Agregaste x producto al carrito',
    color: 'white', background: 'black'})
    }

    return (
        <div className="counterDiv">
            <h2>Contador</h2>

            <p className="counter-P">Total: {initialState}</p>

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
    )
}

export default ItemCount;