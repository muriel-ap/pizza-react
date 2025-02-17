import { useState } from "react";
import { pizzaCart } from "./Pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const changeCount = (id, action) => {
    setCart(
      cart
        .map((product) =>
          product.id === id
            ? {
                ...product,
                count: product.count + (action === "increase" ? 1 : -1),
              }
            : product
        )
        .filter((product) => product.count > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center w-50"
      style={{ minHeight: "100vh" }}
    >
      <div className="row list-cart d-flex flex-column gap-5 align-items-center">
        <h2>Detalles del pedido:</h2>
        {cart.map((product) => (
          <div
            className="list-item d-flex justify-content-between aling-items-center"
            key={product.id}
          >
            <div className="d-flex align-items-center gap-5">
              <img
                src={product.img}
                alt={product.name}
                className="img-cart"
                style={{ width: "100px" }}
              />
              <h3>{product.name}</h3>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p className="m-0">
                <strong>${product.price.toLocaleString("es-CL")}</strong>
              </p>
              <button
                className="btn btn-outline-danger m-0"
                onClick={() => changeCount(product.id, "decrease")}
              >
                -
              </button>
              <p className="m-0">{product.count}</p>
              <button
                className="btn btn-outline-primary m-0"
                onClick={() => changeCount(product.id, "increase")}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5">
        <h3>Total: ${calculateTotal().toLocaleString("es-CL")}</h3>
        <button className="btn btn-dark m-0">pagar</button>
      </div>
    </div>
  );
};

export default Cart;
