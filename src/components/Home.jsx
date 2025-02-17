import { pizzas } from "./Pizzas";
import CardPizza from "./CardPizza/CardPizza";
import Header from "./Header/Header";

const Home = () => {
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
