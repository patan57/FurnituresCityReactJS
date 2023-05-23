import React from "react";

export const CartWidget = (props) => {
    return (
    <>
    <p>{props.greeting}
    <i className="bi bi-cart-check-fill"></i>
    </p>
    
    </>
    ) ;
}

export default CartWidget;