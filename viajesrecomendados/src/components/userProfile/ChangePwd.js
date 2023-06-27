import React, { useState, useContext } from "react";
import {UserContext} from "../../context/UserContext"
import { updateUser } from "../../services";


const ChangePwd = () => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const {token} = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const [status, setStatus] = useState();
  
  const handleButton = async (e) => {
    e.preventDefault();
    const data = {
      "oldPwd": oldPassword,
      "newPwd": newPassword
    };    
    const response = await updateUser(`${process.env.REACT_APP_BACKEND}/users/newpassword`, data, token, false);
    console.log(response)
    setSuccessMessage(`${response.message}`);
    setStatus(response.success ? "success" : "error");
    
  };
  
  return (
    <div className="eu-component-container">
      <div className="container-h2">
      <h2 className="eu-component-h2">Cambiar contraseña</h2>
      </div>
      <div>
        <div className="eu-component-input-container">
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="eu-input-text"
            placeholder="Contraseña actual"
          />
        
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="eu-input-text"
            placeholder="Nueva contraseña"
          />
        </div>
        <button onClick={handleButton} className="update-button">Actualizar</button>
      </div>
      {successMessage && <div className={status}>{successMessage}</div>}

    </div>
  );
};

export default ChangePwd;