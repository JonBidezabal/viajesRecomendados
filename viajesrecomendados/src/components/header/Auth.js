import { Link } from "react-router-dom";
import "../../css/Header.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { HeaderContext } from "../../context/HeaderContext";

const Auth = ({ showMenu, setShowMenu }) => {
  const { user, logout } = useContext(UserContext);
  const { hidelist } = useContext(HeaderContext);
  return user ? (
    /*Enlaces con el login y el registro, si ya estás logueado sale una sección con tu nombre y la 
    posibilidad de modificar tu perfil */
    <section className="auth-section">
      Hola{" "}
      <Link to={`/users/editprofile`}>
        {user[0].name}
      </Link>
      <img
        className="auth-avatar"
        alt="avatar"
        src={`${process.env.REACT_APP_BACKEND}/${user[0].avatar}`}
        style={{ width: "40px" }}
      />
      <button onClick={() => { logout(); setShowMenu(!showMenu) }}>
        <Link to={"/"}>
          ❌
        </Link>
      </button>
    </section>
  ) : (
    <>
      <ul className="auth">
        <li className="auth-li">
          <Link
            to="/login"
            className="auth-link">
            <span onClick={() => setShowMenu(!showMenu)}>INICIA SESIÓN</span>
          </Link>
        </li>

        <li className="auth-li">
          <Link
            to="/signup"
            className="auth-link">
            <span onClick={() => setShowMenu(!showMenu)}>REGÍSTRATE</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Auth;
