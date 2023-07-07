import React, { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    const addMueble = (product, quantity) => {
        if (isInCart(product.id)) {
            setCart(
                cart.map((mueble) => {
                    return mueble.id === product.id
                        ? {...mueble, quantity: mueble.quantity + quantity }
                        :mueble;
                }),
            );
        } else {
            setCart ([...cart, {...product, quantity}]);
        }
    };

    const totalPrice = () => {
        return cart.reduce(
            (prev,act) => prev + act.quantity*act.price, 0
        );
    };

    const totalMuebles = () =>
        cart.reduce(
            (acumulador, muebleActual) => acumulador + muebleActual.quantity, 0,);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find (mueble => mueble.id === id) ? true : false;

    const removeMueble = (id) => setCart(cart.filter(mueble => mueble.id !== id));



    return(
        <CartContext.Provider value={{
            addMueble,
            clearCart,
            isInCart,
            removeMueble,
            totalPrice,
            totalMuebles,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;