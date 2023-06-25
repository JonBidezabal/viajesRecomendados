import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import ChangeAvatar from "../components/userProfile/ChangeAvatar";
import ChangeName from "../components/userProfile/ChangeName";
import ChangeMail from "../components/userProfile/ChangeMail";
import ChangePwd from "../components/userProfile/ChangePwd";
import "../css/editProfile.css";

const EditProfile = () => {
  const [showAvatar, setShowAvatar] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [active, setActive] = useState(false);

  const { user } = useContext(UserContext);


  const handleButtonProfile = () => {
    setShowAvatar(!showAvatar);
    setActive(!active);
  };

  const handleButtonName = () => {
    setShowName(!showName);
    setActive(!active);
  };

  const handleButtonPwd = () => {
    setShowPwd(!showPwd);
    setActive(!active);
  };

  const handleButtonEmail = () => {
    setShowEmail(!showEmail);
    setActive(!active);
  };

  const handleButtonUpdate = () => {
    setActive(false);
    setShowEmail(false);
    setShowPwd(false);
    setShowName(false);
    setShowAvatar(false);
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header-container"> 
      {user && (
        <img
          className="avatar"
          src={`${process.env.REACT_APP_BACKEND}/${user[0].avatar}`}
          alt={`${user[0].avatar}`}
        />
      )}
      <div className="edit-profile-h2-container">
      {user && <h2>Perfil de usuario</h2>}
      {user && user[0].name && <p className="user-info">Nombre: {user[0].name}</p>}
      {user  && (
        <p className="user-info">Email: {user[0].email}</p>
      )}
      {user && (
        <p className="user-info">Registro: {user[0].date}</p>
      )}
      </div>
      </div>
      {!active && (
        <button className="profile-button" onClick={handleButtonProfile}>
          Cambiar imagen de perfil
        </button>
      )}
      {showAvatar && active && <ChangeAvatar />}
      {!active && !showName && (
        <button className="info-button" onClick={handleButtonName}>
          Modificar nombre
        </button>
      )}
      {showName && <ChangeName />}
      {!active && (
        <button className="info-button" onClick={handleButtonPwd}>
          Modificar contraseña
        </button>
      )}
      {showPwd && <ChangePwd />}
      {!active && (
        <button className="info-button" onClick={handleButtonEmail}>
          Modificar correo electrónico
        </button>
      )}
      {showEmail && active && <ChangeMail />}
      {active && (
        <button className="update-button" onClick={handleButtonUpdate}>
          Volver a gestión de usuario
        </button>
      )}
    </div>
  );
};

export default EditProfile;