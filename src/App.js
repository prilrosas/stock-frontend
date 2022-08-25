import React from 'react';

import { Link } from "react-router-dom";





export default function App() {
  return (
<>
<h1>Welcome to React Router!</h1>
<nav  style={{ borderBottom: "solid 1px",  paddingBottom: "1rem",  }}
      >
        <Link to="/report">Relatorio</Link> |{" "}

        <Link to="/param">Parametros`</Link> |{" "}
        <Link to="/upload">Upload de arquivo</Link>

      </nav>


</>
   

  );
}
