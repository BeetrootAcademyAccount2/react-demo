import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class CardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardColor: props.cardColor,
      cardNumber: props.cardNumber,
      card: props.card,
    };
    console.log("CardClass Constructor");

    // this.counter = 0;
    // this.interval = setInterval(() => {
    //   console.log(this.counter++);
    // }, 2000);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("CardClass getDerivedStateFromProps");

  //   console.log("Next:", nextProps);
  //   console.log("Prev:", prevState);

  //   if (nextProps.cardColor !== prevState.cardColor) {
  //     return {
  //       cardColor: nextProps.cardColor,
  //       cardNumber: nextProps.cardNumber,
  //     };
  //   }

  //   return null;
  // }

  // componentDidMount() {
  //   console.log("CardClass componentDidMount");
  // }

  // shouldComponentUpdate(nextProps, prevState) {
  //   console.log("CardClass shouldComponentUpdate");
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("CardClass getSnapshotBeforeUpdate");

  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("CardClass componentDidUpdate");
  // }

  componentWillUnmount() {
    console.log("CardClass componentWillUnmount");
    clearInterval(this.interval);
  }
  render() {
    const card = this.state.card;
    return (
      <Card style={{ width: "18rem", backgroundColor: this.state.cardColor }}>
        <Card.Img variant="top" src={card.thumbnail} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.brand}</Card.Text>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardClass;
