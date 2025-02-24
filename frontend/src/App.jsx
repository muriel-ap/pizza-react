import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
// import Register from "./components/Forms/Register";
// import Login from "./components/Forms/Login";
//import Cart from "./components/Cart"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/*<Register />*/}
      {/* <Login /> */}
      {/*<Cart />*/}
      <Pizza />

      <Footer />
    </>
  );
}

export default App;
