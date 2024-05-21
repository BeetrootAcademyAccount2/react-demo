import CardItem from "./Card";
import "../styles/CardList.scss";

function CardList() {
  const dogs = [
    { id: 1, name: "John", description: "Good dog" },
    { id: 2, name: "Stephen", description: "Bad dog" },
    { id: 3, name: "Sven", description: "Alright dog" },
  ];

  return (
    <ul className="CardList-list">
      {dogs.map((dog) => {
        console.log(dog);
        return (
          <li key={dog.id}>
            <CardItem dog={dog} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
