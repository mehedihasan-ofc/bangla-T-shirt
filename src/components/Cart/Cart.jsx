import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;
    if(cart.length === 0) {
        message = "Please add some products"
    }
    else {
        message = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'purple' : 'orange'}>Order Summary: {cart.length}</h2>
            {/* CONDITIONAL CSS STYLE */}
            <p className={`bold ${cart.length === 3 ? "teal" : "yellow"}`}>Something</p>

            {/*==========> CONDITIONAL RENDERING <==============*/}
            {/* {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>} */}
            {message}
            {cart.length === 2 && <p>Double Bonanza!!!</p>}
            {cart.length === 3 || <h3>Tinta to hoilo na</h3>}

            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>D</button>
                </p>)
            }
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering
 * 01. use if else to set a variable that will contain an element, components
 * 02. ternary operator: condition ? 'for true' : 'false'
 * 03. Logical &&: (if the condition is true then the next thing will be displayed)
 * 04. Logical || : (if the condition is false then the next thing will be displayed)
*/

/**
 * Conditional CSS Style
 * 01. use ternary
 * 02. ternary insie template string
*/