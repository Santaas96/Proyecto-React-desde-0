// Importamos React
import React from "react";
import ReactDOM from "react-dom/client";
// Imports de Redux
// import { Provider } from "react-redux";

import App from "./components/App";

// Importamos estilos
import "./styles/css/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
