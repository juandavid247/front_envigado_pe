import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './fonts/myriad-pro/MYRIADPRO-REGULAR.ttf'
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/GestionarPublicidadExterior">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
