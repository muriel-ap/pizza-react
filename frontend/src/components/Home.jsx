import { useEffect, useState } from "react";
import CardPizza from "./CardPizza/CardPizza";
import Header from "./Header/Header";

const API_URL = "http://localhost:5000/api/pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener datos de pizzas", error);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      <main className="container-pizza row d-flex justify-content-center m-5">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              img={pizza.img}
              desc={pizza.desc}
              ingredients={pizza.ingredients}
            />
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
