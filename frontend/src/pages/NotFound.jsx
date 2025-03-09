import { Link } from "react-router-dom";
import pizzaNotFound from "../assets/pizzaNotFound.png";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <img src={pizzaNotFound}
        alt="Página no encontrada"
        className="img-fluid my-4"
        style={{ maxWidth: "100%" }}>
      </img>
      <h1>404 - Página no encontrada</h1>
      <p>Oops! Parece que esta página no existe.</p>
      <Button as={Link} to="/" className="btn btn-primary mb-3">
        Volver al Home
      </Button>
    </div>
  );
};

export default NotFound;