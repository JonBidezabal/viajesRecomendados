import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { logInUserService } from "../services";
import "../css/Forms.css"


const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const token = await logInUserService({ email, password });

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="login-page">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pass">Contraseña</label>
        <input
          type="password"
          name="pass"
          id="pass"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Iniciar Sesión</button>
        {error && <p>{error}</p>}
      </form>
      <p>¿No tienes cuenta? - <Link to={"/signup"}>Regístrate</Link></p>
    </main>
  );
};

export default LoginPage;
