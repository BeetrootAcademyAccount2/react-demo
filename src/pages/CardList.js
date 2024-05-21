import CardItem from "./Card";
import "../styles/CardList.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";

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
  const [selectedCards, setSelectedCards] = useState(initialCards);

  const handleGroupFilterClick = (group) => {
    setCounter((prevValue) => {
      console.log(prevValue);
      return ++prevValue;
    });
    setSelectedCardGroup(group);
  };

  const filteredCards =
    selectedCardGroup === "all"
      ? selectedCards
      : selectedCards.filter((card) => card.group === selectedCardGroup);

  const deleteCard = (cardId) => {
    setSelectedCards((cards) => cards.filter((card) => card.id !== cardId));
  };

  return (
    <div>
      <div id="buttons">
        <Button className="m-2" onClick={() => handleGroupFilterClick("all")}>
          All
        </Button>
        <Button className="m-2" onClick={() => handleGroupFilterClick("dogs")}>
          Dogs
        </Button>
        <Button
          className="m-2"
          onClick={() => handleGroupFilterClick("mountains")}
        >
          Mountains
        </Button>
        <Button
          className="m-2"
          onClick={() => handleGroupFilterClick("towers")}
        >
          Towers
        </Button>
      </div>
      <ul className="CardList-list">
        {filteredCards.map((card) => {
          console.log(card);
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
