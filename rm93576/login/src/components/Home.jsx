import React from "react";
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

export default function Home() {
  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div>
      <h2>
        Olá usuário <span> {usuario}</span>
      </h2>
    </div>
  );
}
