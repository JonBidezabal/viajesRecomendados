import { Link } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Auth = () => {
  const { user, logout } = useContext(UserContext);

  return user ? (
    <section>
      Hola <Link to={`/users/editprofile`}>{user[0].name}</Link>
      <button onClick={() => logout()}>❌</button>
    </section>
  ) : (
    <ul className="auth">
      <li className="auth-li">
        <Link to="/login" className="auth-link">
          INICIA SESIÓN
        </Link>
      </li>

      <li className="auth-li">
        <Link to="/signup" className="auth-link">
          REGÍSTRATE
        </Link>
      </li>
    </ul>
  );
};

export default Auth;
