// Importamos React
import React from "react";
import ReactDOM from "react-dom/client";
// Imports de Redux
// import { Provider } from "react-redux";

import App from "./components/App";

// Importamos estilos
import "./styles/css/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
