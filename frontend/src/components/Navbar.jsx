import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/register">🔐Registro</Nav.Link>
            <Nav.Link as={Link} to="/login">🔐Login</Nav.Link>
            <Nav.Link as={Link} to="/profile">🔓Perfil</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="fw-bold text-warning">
              🛒 Total: $
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
