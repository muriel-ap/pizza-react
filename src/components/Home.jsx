import Header from "./Header/Header";
import CardPizza from "./CardPizza/CardPizza";

const Home = () => {
  const pizzas = [
    {
      id: 1,
      name: "Pizza Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://images.mrcook.app/recipe-image/01932d67-fdb7-7bdc-b005-d168e7ec00b9",
    },
    {
      id: 2,
      name: "Pizza Margarita",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://nuevo.meltpizzas.com/media/catalog/product/p/o/portada_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
    },
    {
      id: 3,
      name: "Pizza Peperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://nuevo.meltpizzas.com/media/catalog/product/d/o/double_pepperoni_1-min_1.png",
    },
  ];

  return (
    <>
      <Header />
      <div className="pizza-container row d-flex justify-content-center p-5">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients.join(", ")}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
