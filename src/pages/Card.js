import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ card, onDelete }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Img variant="top" src={card.thumbnail} />
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.brand}</Card.Text>
        <Button variant="primary" onClick={() => onDelete(card.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
