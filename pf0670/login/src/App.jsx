import React from "react";
import Menu from "./components/Menu";
import MainRoutes from "./routes/MainRoutes";

export default function App() {
  return (
    <div>
      <Menu />
      <h1>CONTROLE DE ACESSO</h1>
      <MainRoutes />
    </div>
  );
}
