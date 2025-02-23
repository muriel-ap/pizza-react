import { useState } from "react";
import "./Forms.css";

const Login = () => {
  const [login, setLogin] = useState({email: "", password: "",});

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { email, password,} = login;

    if (!email || !password){
      setMensaje("Todos los campos son obligatorios (no pueden estar vacíos).");
    return;
    }
    if (password.length < 6){
      setMensaje ("El password debe tener al menos 6 caracteres.");
      return;
    }

    setLogin({ email: "", password: "",});
    setMensaje ("¡Login exitoso!");
  };

  return (
    <form className="containter-form" onSubmit={handleSend}>
       <h2>Formulario de Registro</h2>
       <div>
        <label className="label" htmlFor="email">Email</label>
        <input
        type="email"
        name="email"
        value={login.email}
        onChange={handleChange}
        />
       </div>
       <div>
        <label className="label"htmlFor="password">Password</label>
        <input
        type="password"
        name="password"
        value={login.password}
        onChange={handleChange}
        />
       </div>

       <button className="btn btn-primary" type="submit">Enviar</button>
       <p className={mensaje === "¡Login exitoso!" ? "text-success" : "text-danger" }>{mensaje}</p>
    </form>
  );
};

export default Login;
