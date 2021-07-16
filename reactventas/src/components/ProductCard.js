import { Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {
    return ( 
        <div>
            <Card style={{ width: '18rem' }} className="margenTarjeta">
            <Card.Img variant="top" src= {require(`../assets/images/${props.imagen}`).default} />
            <Card.Body>
                <Card.Title>{props.ubicacion}</Card.Title>
                <Card.Text>
                {props.descripcion}
                </Card.Text>
                <Button  href={`products/${props.id}`}  variant="primary">Detalle</Button>
            </Card.Body>
            </Card>            
        </div>
     );
}
 
export default ProductCard;