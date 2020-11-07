import React from "react";
import Footer from "../Footer";
import PreciosTabla from "../PreciosTabla";
import NavBar from "../../components/Navbar";

function Precios() {
  return (
    <div>
      <NavBar/>
      <PreciosTabla />
      <Footer />
    </div>
  );
}

export default Precios;
