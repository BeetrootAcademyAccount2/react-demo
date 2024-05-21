import React from "react";
import CardClass from "./CardClass";
import Button from "react-bootstrap/esm/Button";

class CardListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
    console.log("CardListClass Constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("CardListClass getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("CardListClass componentDidMount");
  }

  shouldComponentUpdate(nextProps, prevState) {
    console.log("CardListClass shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("CardListClass getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("CardListClass componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CardListClass componentWillUnmount");
  }

  toggle() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isShown: !prevState.isShown,
      };
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.toggle()}>Toggle</Button>
        {this.state.isShown && <CardClass />}
      </div>
    );
  }
}

export default CardListClass;
