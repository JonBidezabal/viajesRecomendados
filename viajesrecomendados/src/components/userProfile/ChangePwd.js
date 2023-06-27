import React, { useState, useContext } from "react";
import {UserContext} from "../../context/UserContext"


const ChangePwd = () => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const [status, setStatus] = useState();


  const newPwd = async ({ oldPwd, newPwd, token }) => {
    
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/newpassword`, {
      method: "PATCH",
      body: JSON.stringify({ oldPwd, newPwd }),
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      setSuccessMessage(`No se ha podido realizar el cambio, ${json.message}`);
      setStatus("success");
    }else{
      setSuccessMessage("Cambio realizado con éxito");
      setStatus("error");
    }
  
  
    return json.data;
  };
  
  const handleButton = (e) => {
    e.preventDefault();
    newPwd({ oldPwd: oldPassword, newPwd: newPassword, token: token });
    
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