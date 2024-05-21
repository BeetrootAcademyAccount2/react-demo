import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ dog }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text>{dog.description}</Card.Text>
        <Button variant="primary">Adopt</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
