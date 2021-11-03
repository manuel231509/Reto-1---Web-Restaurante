import React from "react";
import "../components/Inicio/Styles/estilos-inicio.css";
import Carrusel from "../components/Inicio/Carrusel";
import Principal from "../components/Inicio/Principal";
import Destacados from "../components/Inicio/Destacados";
import Servicios from "../components/Inicio/Servicios";
import Testimonios from "../components/Inicio/Testimonios";

const Inicio = () => {
  return (
    <>
      <Carrusel />
      <Principal />
      <Destacados />
      <Servicios />
      <Testimonios />
    </>
  );
};
export default Inicio;
