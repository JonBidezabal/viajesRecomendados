import { Link } from "react-router-dom";
import "../../css/Header.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { AiOutlineClose } from "react-icons/ai";

const Auth = ({ showMenu, setShowMenu }) => {
  const { user, logout } = useContext(UserContext);
  return user ? (
    /*Enlaces con el login y el registro, si ya estás logueado sale una sección con tu nombre y la 
    posibilidad de modificar tu perfil */
    <ul className="auth-ul">
      <li>
        Hola{" "}
        <Link to={`/users/editprofile`} title="Gestionar mi perfil">
          {user[0].name}
        </Link>
      </li>
      <li>
        <img
          className="auth-avatar"
          alt="avatar"
          src={`${process.env.REACT_APP_BACKEND}/${user[0].avatar}`}
          style={{ width: "40px" }}
        />
      </li>
      <li>
        {" "}
        <Link to={"/"}>
          <button
            onClick={() => {
              logout();
              setShowMenu(!showMenu);
            }}
            className="button">
            <AiOutlineClose /> Cerrar Sesión
          </button>{" "}
        </Link>
      </li>
    </ul>
  ) : (
    <>
      <ul className="auth-ul" id="login-signup">
        <li className="auth-li">
          <Link to="/login" className="auth-link">
            <span onClick={() => setShowMenu(!showMenu)} className="button">
              INICIA SESIÓN
            </span>
          </Link>
        </li>

        <li className="auth-li">
          <Link to="/signup" className="auth-link">
            <span onClick={() => setShowMenu(!showMenu)} className="button">
              REGÍSTRATE
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Auth;
