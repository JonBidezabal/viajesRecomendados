import React, { useState, useContext } from "react";
import {UserContext} from "../../context/UserContext"
import { updateUser } from "../../services";


const ChangeName = () => {
  const [newName, setNewName] = useState("");
  const { user, token, setForceUpdate, forceUpdate } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const [status, setStatus] = useState();

  const handleButton = async (e) => {
    e.preventDefault();

    if (user && newName) {
     
      const data = { name: newName };
      const response = await updateUser(`${process.env.REACT_APP_BACKEND}/users/update/${user[0].id}`, data, token, false);

      setSuccessMessage(response.message);
      setStatus(response.success ? "success" : "error");
      if (response.success) {
        setForceUpdate(!forceUpdate);
      }
    }
  };

  return (
    <div className="eu-component-container">
            <div className="container-h2">
      <h2 className="eu-component-h2">Cambiar nombre</h2>
      </div>
      <div>
        <div className="eu-component-input-container">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="eu-input-text"
            placeholder="Nuevo nombre"
          />
        </div>
        <button onClick={handleButton} className="update-button">Actualizar</button>
      </div>
      {successMessage && <div className={status}>{successMessage}</div>}
    </div>
  );
};

export default ChangeName;