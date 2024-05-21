import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ card }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Button variant="primary">Adopt</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
