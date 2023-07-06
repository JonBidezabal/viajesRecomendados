import { Link } from "react-router-dom";
import "../../css/Header.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { HeaderContext } from "../../context/HeaderContext";

const Auth = ({ setMenu }) => {
  const { user, logout } = useContext(UserContext);
  const { hidelist } = useContext(HeaderContext);
  return user ? (
    /*Enlaces con el login y el registro, si ya estás logueado sale una sección con tu nombre y la 
    posibilidad de modificar tu perfil */

    <section className="auth-section" onClick={hidelist}>
      Hola{" "}
      <Link to={`/users/editprofile`} onClick={() => setMenu(false)}>
        {user[0].name}
      </Link>
      <img
        className="auth-avatar"
        alt="avatar"
        src={`${process.env.REACT_APP_BACKEND}/${user[0].avatar}`}
      />
      <button onClick={() => logout()}>
        <Link to={"/"} onClick={() => setMenu(false)}>
          ❌
        </Link>
      </button>
    </section>
  ) : (
    <>
      <h4>Gestión de usuario</h4>
      <ul className="auth" onClick={hidelist}>
        <li className="auth-li">
          <Link
            to="/login"
            className="auth-link"
            onClick={() => setMenu(false)}>
            INICIA SESIÓN
          </Link>
        </li>

        <li className="auth-li">
          <Link
            to="/signup"
            className="auth-link"
            onClick={() => setMenu(false)}>
            REGÍSTRATE
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Auth;
