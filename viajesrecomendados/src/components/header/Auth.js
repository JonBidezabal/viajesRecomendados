import { Link } from "react-router-dom";
import "./style.css";

const Auth = () => {
  return (
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
