// import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../styles/Main.scss";
import CardList from "./CardList";

function Main() {
  const href = "https://www.google.com";

  // const click1 = (value) => {
  //   console.log(value);
  // };

  // const click2 = (value) => {
  //   console.log(value);
  // };

  return (
    <main>
      <h2>Main Info</h2>
      <CardList />
    </main>
  );
}

export default Main;
