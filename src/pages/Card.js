import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ThemeContext } from "./context/Theme";
import { NavLink } from "react-router-dom";

function CardItem({ card, onDelete }) {
  // const { theme } = useContext(ThemeContext);

  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "pink",
      }}
    >
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Img variant="top" src={card.thumbnail} />
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.brand}</Card.Text>
        <Button
          variant="secondary"
          className="m-2"
          as={NavLink}
          to={`${card.id}`}
        >
          Details
        </Button>
        <Button variant="danger" onClick={() => onDelete(card.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
