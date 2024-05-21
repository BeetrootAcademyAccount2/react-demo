import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class CardClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("CardClass Constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("CardClass getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("CardClass componentDidMount");
  }

  shouldComponentUpdate(nextProps, prevState) {
    console.log("CardClass shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("CardClass getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("CardClass componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CardClass componentWillUnmount");
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={card.img} /> */}
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Description</Card.Text>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardClass;
