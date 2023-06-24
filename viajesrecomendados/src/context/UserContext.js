import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const getUserData = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

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
