import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCartCont } from "./context/CartContext";

const Navigation = () => {
  const { getTotal } = useCartCont();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/register">
              🔐Registro
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              🔐Login
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              🔓Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="fw-bold text-info">
              🛒 Total: ${getTotal()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
