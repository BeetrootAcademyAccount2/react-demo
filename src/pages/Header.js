import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "./context/Theme";

function Header({ setPage }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme === "dark" ? "dark" : "primary"} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React Demo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#" onClick={() => setPage("landing")}>
            Landing
          </Nav.Link>
          <Nav.Link href="#" onClick={() => setPage("login")}>
            Login
          </Nav.Link>
          <Nav.Link href="#" onClick={() => setPage("register")}>
            Register
          </Nav.Link>
          <Nav.Link href="#" onClick={() => setPage("info")}>
            Info
          </Nav.Link>
          <Button onClick={toggleTheme} variant="outline-none">
            <FaGlobe />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
