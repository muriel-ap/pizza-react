import { useCartCont } from "../components/context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCartCont();

  const changeCount = (id, action) => {
    const product = cart.find((product) => product.id === id);
    if (!product) return;

    if (action === "increase") {
      addToCart({ ...product, count: +1 });
    } else if (action === "decrease" && product.count > 1) {
      addToCart({ ...product, count: -1 });
    } else if (product.count === 1) {
      removeFromCart(id);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center w-50 mt-5">
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
                {" "}
                -{" "}
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
        <h3>Total: ${getTotal().toLocaleString("es-CL")}</h3>
        <button className="btn btn-dark m-0">pagar</button>
      </div>
    </div>
  );
};

export default Cart;
