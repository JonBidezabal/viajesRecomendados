import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { HeaderContextProvider } from "./context/HeaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <HeaderContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HeaderContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
