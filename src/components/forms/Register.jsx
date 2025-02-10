import { useState } from "react";
import "./forms.css";

const Register = () => {
  const [formulario, setFormulario] = useState({email: "", password: "", confirmPassword: "",});

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formulario;

    if (!email || !password || !confirmPassword){
      setMensaje("Todos los campos son obligatorios (no pueden estar vacíos).");
    return;
    }
    if (password.length < 6){
      setMensaje ("El password debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword){
      setMensaje ("El password y la conrmación del password deben ser iguales.");
      return;
    }

    setFormulario({ email: "", password: "", confirmPassword: "",});
    setMensaje ("¡Registro exitoso!");
  };

  return (
    <form className="containter-form" onSubmit={handleSend}>
       <h2>Formulario de Registro</h2>
       <div>
        <label className="label" htmlFor="email">Email</label>
        <input
        type="email"
        name="email"
        value={formulario.email}
        onChange={handleChange}
        />
       </div>
       <div>
        <label className="label"htmlFor="password">Password</label>
        <input
        type="password"
        name="password"
        value={formulario.password}
        onChange={handleChange}
        />
       </div>
       <div>
        <label className="label" htmlFor="password">Confirmar Password</label>
        <input
        type="password"
        name="confirmPassword"
        value={formulario.confirmPassword}
        onChange={handleChange}
        />
       </div>
       <button className="btn btn-primary" type="submit">Registrar</button>
       <p className={mensaje === "¡Registro exitoso!" ? "text-success" : "text-danger" }>{mensaje}</p>
    </form>
  );
};

export default Register;
