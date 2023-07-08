
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function muebleCard({info}) {
    return (
        <Link to= {`/detalle/${info.id}`} style={{ width: '18rem' }}>
            <Card.Img className="itemImage" variant="top" src={info.image} />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                    {info.text}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Link>
    );
}

// function muebleCard({info}) {
//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={info.image} />
//             <Card.Body>
//                 <Card.Title>{info.title}</Card.Title>
//                 <Card.Text>
//                     {info.text}
//                 </Card.Text>
//                 <Button variant="primary">Comprar</Button>
//             </Card.Body>
//         </Card>
//     );
// }

export default muebleCard;