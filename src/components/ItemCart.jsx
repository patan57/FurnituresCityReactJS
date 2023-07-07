import React from 'react';
import { useCartContext } from '../context/CartContext';

const ItemCart = ({mueble}) => {
    const {removeMueble} = useCartContext();
        return (
            <div className='itemCart'>
                <img src={mueble.image} alt={mueble.title} />
                <div>
                    <p>Título: {mueble.image}</p>
                    <p>Cantidad: {mueble.quantity}</p>
                    <p>Precio u.: {mueble.price}</p>
                    <p>Subtotal: ${mueble.quantity* mueble.price}</p>
                    <button onClick={() => removeMueble(mueble.id)}>Eliminar</button>
                </div>
            </div>
    )
    }

    export default ItemCart;