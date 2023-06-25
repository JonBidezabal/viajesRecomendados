import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import '../../css/editUserComponent.css'

const ChangeAvatar = () => {
  const { user, token } = useContext(UserContext);
  const [file, setFile] = useState(null);

  const handleInput = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if ( user && file) {
      const formData = new FormData();
      formData.append("avatar", file);

      fetch(`${process.env.REACT_APP_BACKEND}/users/update/${user[0].id}`, {
        method: "PATCH",
        body: formData,
        headers: {
          authorization: token,
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="eu-component-container">
      <div className="container-h2">
      <h2 className="eu-component-h2">Cambiar imagen de perfil</h2>
      </div>
      <form onSubmit={handleUpload}>
          <label className="input-file-container">
            <span>Seleccionar archivo</span>
            <input type="file" onChange={handleInput}/>
          </label>
        <button className="update-button" type="submit">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default ChangeAvatar;
