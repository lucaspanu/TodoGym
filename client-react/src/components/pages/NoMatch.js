import React from "react";
import Error404 from "../Error404";
import NavBar from "../../components/Navbar";

// Paguina 404 - Muestra cuando una paguina no existe

function NoMatch() {
  return (
    <div>
      <NavBar/>
      <Error404 />
    </div>
  );
}

export default NoMatch;
