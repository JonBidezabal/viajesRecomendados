import React, { useState, useContext } from "react";
import {UserContext} from "../../context/UserContext"


const ChangeMail = () => {
  const { user, token } = useContext(UserContext);
const [newEmail, setNewEmail] = useState("");
const [change, setChange] = useState(false)

  const handleChangeMail = (e) => {
    e.preventDefault();

    if (user && newEmail) {
  
        fetch(`${process.env.REACT_APP_BACKEND}/users/update/${user[0].id}`, {
        method: "PATCH",
        body: JSON.stringify({ email: newEmail }),
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
    setChange(true)
  };

  return (
    <div className="eu-component-container">
      <div className="container-h2">
      <h2 className="eu-component-h2">Cambiar Email</h2>
      </div>
      <form onSubmit={handleChangeMail}>
        <div>
          <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Nuevo Email" className="eu-input-text"/>
        </div>
        <button type="submit" className="update-button">Actualizar</button>
      </form>
      {/* {user[0].active == 0 && change === true && <p>Revisa la bandeja de entrada de este email para validar la cuenta.</p>} */}
      {/* {user[0].active == 1 && <p>Modificacion de email realizada con éxito</p>} */}
    </div>
  );
};

export default ChangeMail;