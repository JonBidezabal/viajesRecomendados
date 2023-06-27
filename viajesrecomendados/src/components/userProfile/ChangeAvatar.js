import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { updateUser } from "../../services";
import '../../css/editUserComponent.css'

const ChangeAvatar = () => {
  const { user, token, setForceUpdate, forceUpdate } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [status, setStatus] = useState();

  const handleInput = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if ( user && file) {
      const data = new FormData();
      data.append("avatar", file);

      const response = await updateUser(`${process.env.REACT_APP_BACKEND}/users/update/${user[0].id}`, data, token, true);

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
      <h2 className="eu-component-h2">Cambiar imagen de perfil</h2>
      </div>
      <form onSubmit={handleUpload}>
      <label className="input-file-container">
          <span>{file ? "Archivo seleccionado" : "Seleccionar archivo"}</span>
          <input type="file" onChange={handleInput} />
        </label>
        <button className="update-button" type="submit">
          Actualizar
        </button>
      </form>
            {successMessage && <div className={status}>{successMessage}</div>}
    </div>
  );
};

export default ChangeAvatar;
