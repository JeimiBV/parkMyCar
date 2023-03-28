import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Gestionar from "./components/Plazas/Gestionar";
import Plazas from "./components/Plazas/Plazas";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Plazas></Plazas>
    <Gestionar></Gestionar>
  </React.StrictMode>
);
