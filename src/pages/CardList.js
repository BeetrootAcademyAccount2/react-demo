import CardItem from "./Card";
import "../styles/CardList.scss";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function CardList() {
  const initialCards = [
    {
      id: 1,
      group: "dogs",
      img: "https://picsum.photos/id/237/200/300",
      name: "John",
      description: "Good dog",
    },
    {
      id: 2,
      group: "dogs",
      img: "https://picsum.photos/id/237/200/300",
      name: "Stephen",
      description: "Bad dog",
    },
    {
      id: 3,
      group: "dogs",
      img: "https://picsum.photos/id/237/200/300",
      name: "Sven",
      description: "Alright dog",
    },
    {
      id: 4,
      group: "mountains",
      img: "https://picsum.photos/seed/picsum/200/300",
      name: "Moutain 1",
      description: "Cool Moutain",
    },
    {
      id: 5,
      group: "mountains",
      img: "https://picsum.photos/seed/picsum/200/300",
      name: "Moutain 2",
      description: "Another Coll Mountain",
    },
    {
      id: 6,
      group: "towers",
      img: "https://picsum.photos/id/870/200/300",
      name: "Tower",
      description: "Alright tower",
    },
  ];

  const [selectedCardGroup, setSelectedCardGroup] = useState("all");
  const [counter, setCounter] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);

  const handleGroupFilterClick = (group) => {
    setCounter((prevValue) => {
      return ++prevValue;
    });
    setSelectedCardGroup(group);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network issue");
        }
        return res.json();
      })
      .then((json) => {
        setSelectedCards(json.products);
      })
      .catch((error) => {
        console.log(error);
        setError(error.toString());
      });
  }, []);

  useEffect(() => {
    console.log("Selected Card Group Effect");
  }, [selectedCardGroup]);

  useEffect(() => {
    console.log("DELETION");
  }, [selectedCards]);

  const filteredCards =
    selectedCardGroup === "all"
      ? selectedCards
      : selectedCards.filter((card) => card.category === selectedCardGroup);

  const deleteCard = (cardId) => {
    setSelectedCards((cards) => cards.filter((card) => card.id !== cardId));
  };

  return (
    <div>
      <div id="buttons">
        <Button className="m-2" onClick={() => handleGroupFilterClick("all")}>
          All
        </Button>
        <Button
          className="m-2"
          onClick={() => handleGroupFilterClick("furniture")}
        >
          Furniture
        </Button>
        <Button
          className="m-2"
          onClick={() => handleGroupFilterClick("beauty")}
        >
          Beauty
        </Button>
        <Button
          className="m-2"
          onClick={() => handleGroupFilterClick("groceries")}
        >
          Groceries
        </Button>
      </div>
      {error && <div className="text-danger">Error</div>}
      <ul className="d-flex flex-wrap m-2 gap-3  list-unstyled">
        {filteredCards.map((card) => {
          return (
            <li key={card.id}>
              <CardItem card={card} onDelete={deleteCard} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
