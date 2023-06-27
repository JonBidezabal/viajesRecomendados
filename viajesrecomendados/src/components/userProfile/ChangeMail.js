import React, { useState, useContext, useEffect } from "react";
import {UserContext} from "../../context/UserContext"
import { updateUser } from "../../services";

const ChangeMail = () => {
  const { user, token, forceUpdate, setForceUpdate } = useContext(UserContext);
const [newEmail, setNewEmail] = useState("");
const [validation, setValidation] = useState()
const [successMessage, setSuccessMessage] = useState(null);
const [status, setStatus] = useState();

// useEffect(() => {
//   if (user && user[0].active === 1) {
//     setValidation(true);
//   }
// }, [user]);

// useEffect(() => {
//   if (status === "success") {
//     const interval = setInterval(() => {
//       setForceUpdate(!forceUpdate);
//     }, 20000);

//     return () => {
//       clearInterval(interval);
//     };
//   }
// }, [status, setForceUpdate]);


  const handleChangeMail = async (e) => {
    e.preventDefault();

    if (user && newEmail) {
      const data = { email: newEmail };
      const response = await updateUser(`${process.env.REACT_APP_BACKEND}/users/update/${user[0].id}`, data, token, false);
      setSuccessMessage(`${response.message}`);
      setStatus(response.success ? "success" : "error");

    }
   
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
      {successMessage && !validation && <p>Revisa la bandeja de entrada de este email para validar la cuenta.</p>}
      {successMessage && validation && <div className={status}>{successMessage}</div>}
    </div>
  );
};

export default ChangeMail;