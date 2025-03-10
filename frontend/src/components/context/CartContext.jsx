import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartCont = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id); // Busca una pizza con el mismo id

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + product.count }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, count: product.count }]); // Si no existe, agrega el nuevo producto
    }
  };

  const removeFromCart = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
  };

  const getTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
