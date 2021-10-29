import React from "react";
import CardServicio from "../components/Servicios/CardServicio";
import MainServicios from "../components/Servicios/MainServicios";
import "../components/Servicios/styles/estilos-servicios.css";

const Servicios = () => {
  return (
    <>
      <MainServicios>
        <CardServicio />
      </MainServicios>
    </>
  );
};

export default Servicios;
