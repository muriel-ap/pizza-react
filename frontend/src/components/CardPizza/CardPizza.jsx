import "./CardPizza.css";

const CardPizza = ({ id, img, name, desc, price, ingredients, addToCart }) => {
  const precio = price?.toLocaleString("es-CL") || "No disponible";

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <h3 className="card-title py-2 m-0">{name}</h3>
      <p className="card-text m-0">{desc}</p>
      <p className="fw-bold my-2">Ingredientes:</p>
      <ul className="list-container">
        {ingredients.map((ingredient) => (
          <li className="card-subtext" key={ingredient}>
            🍕{ingredient}.
          </li>
        ))}
      </ul>
      <p className="card-price fs-4 fw-bold">Precio: ${precio}</p>
      <div className="card-footer">
        <button
          className="btn btn-dark"
          onClick={() => addToCart({ id, name, price, img, count: 1 })} // Aseguramos el formato correcto
        >
          {" "}
          🛒Añadir{" "}
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
