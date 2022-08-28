import React from 'react';
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem", }} >
        <Link to="/report">Relatório</Link> |{" "}
        {/* <Link to="/upload">Upload de arquivo</Link>   |{" "} */}
        <Link to="/politica">Política de Estoque</Link> |{" "}
        {/* <Link to="/param">Parâmetros</Link> |{" "} */}

      </nav>
    </>
  )
}