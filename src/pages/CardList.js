import CardItem from "./Card";
import "../styles/CardList.scss";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";

function CardList() {
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

  const cardData = useLoaderData();

  const navigation = useNavigation();

  const breadcrumb = useLocation();

  console.log(breadcrumb);

  useEffect(() => {
    if (cardData && cardData.products) {
      setSelectedCards(cardData.products);
    } else {
      setError("Data was not fetched");
    }
  }, [cardData]);

  /*
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
  */

  // useEffect(() => {
  //   console.log("Selected Card Group Effect");
  // }, [selectedCardGroup]);

  // useEffect(() => {
  //   console.log("DELETION");
  // }, [selectedCards]);

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
      {navigation.state === "loading" ? (
        <p className="display-4 m-4">Loading...</p>
      ) : (
        <div>
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
      )}
    </div>
  );
}

export const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
};

export default CardList;
