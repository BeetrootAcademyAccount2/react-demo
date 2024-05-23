import React from "react";
import CardClass from "./CardClass";
import Button from "react-bootstrap/esm/Button";

class CardListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
      cardColor: "",
      cardNumber: 2,
      error: null,
      cards: [],
    };

    this.containerRef = React.createRef();
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("CardListClass getDerivedStateFromProps");
  //   return null;
  // }

  // componentDidCatch(error, info) {
  //   console.log("Error:", error);
  //   console.log("Info:", info);
  // }

  componentDidMount() {
    console.log("CardListClass componentDidMount");
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network issue");
        }
        return res.json();
      })
      .then((json) => {
        this.setState({ cards: json.products });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error.toString() });
      });
  }

  // shouldComponentUpdate(nextProps, prevState) {
  //   console.log("CardListClass shouldComponentUpdate");
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("CardListClass getSnapshotBeforeUpdate");

  //   const container = this.containerRef.current;
  //   if (container) {
  //     return container.scrollTop;
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("CardListClass componentDidUpdate");

  //   console.log(snapshot);
  //   const container = this.containerRef.current;

  //   if (container && snapshot !== null) {
  //     container.scrollTop = 0;
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("CardListClass componentWillUnmount");
  // }

  toggle() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isShown: !prevState.isShown,
      };
    });
  }

  changeCard(number, color) {
    this.setState((prevState) => {
      return {
        cardColor: number,
        cardNumber: color,
      };
    });
  }

  render() {
    const { cards, cardColor, cardNumber, isShown } = this.state;

    return (
      <div>
        <Button onClick={() => this.toggle()}>Toggle</Button>
        <Button onClick={() => this.changeCard("red", 1)}>Red 1</Button>
        <Button onClick={() => this.changeCard("blue", 1)}>Blue 1</Button>
        <Button onClick={() => this.changeCard("blue", 2)}>Blue 2</Button>

        <div
          className="d-flex flex-wrap m-2 gap-3"
          ref={this.containerRef}
          style={{ overflowY: "scroll", maxHeight: "900px" }}
        >
          {isShown &&
            cards.map((card) => (
              <CardClass
                key={card.id}
                cardColor={cardColor}
                cardNumber={cardNumber}
                card={card}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default CardListClass;
