import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePwd = () => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
//   const {password, token} = userContext()
// if(oldPassword){
//   if(password !== oldPassword){
//     return("Error, la contraseña no es correcta")
//   }
// }
  const navigate = useNavigate();


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
      throw new Error(json.message);
    }
  
    return json.data;
  };
  
  const handleButton = (e) => {
    e.preventDefault();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInJvbGUiOiJub3JtYWwiLCJuYW1lIjoiTWFyaWEiLCJhdmF0YXIiOm51bGwsImlhdCI6MTY4NzQ1OTQ2MiwiZXhwIjoxNjg3NDYzMDYyfQ.N_RsZuHMunl4UQHSWpfdhiKk8RXGnj6od0aTVDlBGqw";
    newPwd({ oldPwd: oldPassword, newPwd: newPassword, token: token });
    navigate("/SignUp");
  };
  
  return (
    <div>
      <div>
        <h2>Cambiar contraseña</h2>
        <div>
          <label>Contraseña actual:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Nueva contraseña:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button onClick={handleButton}>Cambiar contraseña</button>
      </div>
    </div>
  );
};

export default ChangePwd;