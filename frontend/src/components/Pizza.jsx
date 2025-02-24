import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/pizzas/p001";
const Pizza = () => {
  const [pizza, setPizza] = useState([null]);

  const fetchPizza = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener datos de la pizza", error);
    }
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  const ingredientes =
    pizza?.ingredients?.join(", ") || "No hay ingredientes disponibles";
  const precio = pizza?.price?.toLocaleString("es-CL") || "No hay precio";

  return (
    <div className="card mx-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <img
            src={pizza.img}
            className="img-fluid rounded-start"
            alt={pizza.name}
            style={{ objectFit: "cover", height: "auto", width: "100%" }}
          />
        </div>

        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title fw-bold fs-3">{pizza.name}</h5>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">Descripción: {pizza.desc}</p>
            <p className="card-text">
              <strong>Ingredientes:</strong> 🍕{ingredientes}.
            </p>
            <button className="btn btn-dark">🛒Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
