import List from "./List";
import "./Main.scss";

function Main() {
  const href = "https://www.google.com";

  const click1 = (value) => {
    console.log(value);
  };

  const click2 = (value) => {
    console.log(value);
  };

  return (
    <main>
      <h2>Main Info</h2>
      <a href={href}>Google</a>
      <button onClick={click1.bind(this, "Clicked")}>Click</button>
      <button onClick={() => click2("Clicked 2")}>Click2</button>

      <List />
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolor
      </p>
    </main>
  );
}

export default Main;
