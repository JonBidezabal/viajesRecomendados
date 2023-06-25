import React, { useState, useContext } from "react";
import {UserContext} from "../../context/UserContext"


const ChangeName = () => {
  const [newName, setNewName] = useState("");
  const { user, token } = useContext(UserContext);


  const handleButton = (e) => {
    e.preventDefault();

    if (user && newName) {
     
      fetch(`${process.env.REACT_APP_BACKEND}/users/update/${user[0].id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: newName }),
        headers: {
          authorization: token,
          "Content-Type": "application/json",
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
    </div>
  );
};

export default ChangeName;