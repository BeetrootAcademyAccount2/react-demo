import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "./context/Theme";
import { NavLink } from "react-router-dom";

function Header() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React Demo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Landing
          </Nav.Link>
          <Nav.Link as={NavLink} to="login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="register">
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="info">
            Info
          </Nav.Link>
          <Nav.Link as={NavLink} to="non-existent">
            No page
          </Nav.Link>
          <Nav.Link as={NavLink} to="list">
            Card List
          </Nav.Link>
          {/* <Button onClick={toggleTheme} variant="outline-none">
            <FaGlobe />
          </Button> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
