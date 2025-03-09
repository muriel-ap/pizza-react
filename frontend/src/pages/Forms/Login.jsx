import { useState } from "react";

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
    <div className="containter page align-items-center">
       <h2 className="text-center mt-5">Login</h2>
    <form onSubmit={handleSend} className="mt-4 w-50">
       <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
        type="email"
        name="email"
        value={login.email}
        onChange={handleChange}
        className="form-control"
        />
       </div>
       <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
        type="password"
        name="password"
        value={login.password}
        onChange={handleChange}
        className="form-control"
        />
       </div>

       <button className="btn btn-primary  mb-3" type="submit">Enviar</button>
       <p className={mensaje === "¡Login exitoso!" ? "text-success" : "text-danger" }>{mensaje}</p>
    </form>
</div>
  );
};

export default Login;
