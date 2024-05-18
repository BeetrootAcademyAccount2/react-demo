import "./Header.css";

function Header() {
  const title = "Smaller header";
  const bigTitle = () => {
    return "Big Title";
  };

  return (
    <header>
      {/* <h1
        style={{
          color: "green",
          backgroundColor: "yellow",
        }}
      >
        {bigTitle()}
      </h1> */}
      <h1 className="bg-beetroot">Title</h1>
      <h2 className="Header-title">{title}</h2>
    </header>
  );
}

export default Header;
