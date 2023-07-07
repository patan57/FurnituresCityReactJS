import React, {useState} from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

// function muebleDetailCard({data}) {

//     const[goToCart, setGoToCart] = useState(false);

//     const onAdd = (quantity) => {
//         setGoToCart(true);
//     }

//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={data.image} />
//             <Card.Body>
//                 <Card.Title>{data.title}</Card.Title>
//                     {
//                         goToCart
//                         ? <Link to='/cart'>Finalizar compra</Link>
//                         : <ItemCount initial={1} stock={10} onAdd={onAdd} />

//                     }
//                 <Card.Text>
//                     {data.text}
//                 </Card.Text>
//                 <Button variant="primary">Comprar</Button>
//             </Card.Body>
//         </Card>
//     );
// }

// export default muebleDetailCard;

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addMueble} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addMueble(data, quantity);
    }

        return (
            <div className="container">
                <div className="detail">
                    <img className="detail__image" src={data.image} alt="" />
                    <div className="content">
                        <h3>{data.title}</h3>
                        {
                            goToCart
                                ? <Link to ='/cart'>Finalizar compra</Link>
                                : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        }
                    </div>
                    <div>{data.text}</div>
                </div>
            </div>
        );
    }
    




export default ItemDetail;


