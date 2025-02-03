import PropTypes from "prop-types";
import "./CardPizza.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <h2 className="card-title py-2 m-0">{name}</h2>
      <hr />
      <p className="card-text m-0">Ingredientes:</p>
      <p className="card-subtext">🍕{ingredients}</p>
      <hr />
      <p className="fs-4 fw-bold">Precio: ${price}</p>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-outline-dark">👀Ver más</button>
        <button className="btn btn-dark">🛒Añadir</button>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
