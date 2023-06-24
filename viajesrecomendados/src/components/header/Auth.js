import { Link } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Auth = () => {
  const { user, logout } = useContext(UserContext);

  return user ? (
    <section>
      Bienvenido {user[0].name}
      <button onClick={() => logout()}>❌</button>
    </section>
  ) : (
    <ul className="auth">
      <li>
        <Link to="/login">INICIAR SESIÓN</Link>
      </li>

      <li>
        <Link to="/signup">REGÍSTRATE</Link>
      </li>
    </ul>
  );
};

export default Auth;
