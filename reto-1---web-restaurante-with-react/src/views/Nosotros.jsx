import React from "react";
import "../components/Nosotros/styles/estilos-nosotros.css";
import Trabajadores from "../components/Nosotros/Trabajadores";
import CarruselTestimonios from "../components/Nosotros/CarruselTestimonios";
import NuestraHistoria from "../components/Nosotros/NuestraHistoria";

const Nosotros = () => {
  return (
    <>
      <NuestraHistoria />
      <Trabajadores />
      <CarruselTestimonios />
    </>
  );
};

export default Nosotros;
