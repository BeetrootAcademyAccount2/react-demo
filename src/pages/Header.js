import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ setPage }) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
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
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
