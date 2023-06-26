import { createContext, useEffect, useState } from "react";
import { getUserData } from "../services";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const registeredUserData = async () => {
      try {
        const data = await getUserData(token);

        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };

    if (token) registeredUserData();
  }, [token, setToken]);

  const logout = () => {
    setToken("");
    setUser(null);
  };

  const login = (token) => {
    setToken(token);
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
