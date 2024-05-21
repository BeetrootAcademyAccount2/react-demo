import CardItem from "./Card";
import "../styles/CardList.scss";

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

  return (
    <ul className="CardList-list">
      {initialCards.map((card) => {
        console.log(card);
        return (
          <li key={card.id}>
            <CardItem card={card} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
