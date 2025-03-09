import { useState } from "react";

const Register = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formulario;

    if (!email || !password || !confirmPassword) {
      setMensaje("Todos los campos son obligatorios (no pueden estar vacíos).");
      return;
    }
    if (password.length < 6) {
      setMensaje("El password debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setMensaje("El password y la conrmación del password deben ser iguales.");
      return;
    }

    setFormulario({ email: "", password: "", confirmPassword: "" });
    setMensaje("¡Registro exitoso!");
  };

  return (
    <div className="containter page align-items-center">
        <h2 className="mt-5">Formulario de Registro</h2>
      <form className="mt-4 w-50" onSubmit={handleSend}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formulario.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirmar Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formulario.confirmPassword}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Registrar
        </button>
        <p
          className={
            mensaje === "¡Registro exitoso!" ? "text-success" : "text-danger"
          }
        >
          {mensaje}
        </p>
      </form>
    </div>
  );
};

export default Register;
