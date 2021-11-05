import React, { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext";
import CardPlatillo from "./CardPlatillo";
import SinPlatillos from "./SinPlatillos";

const ContenidoCarrito = ({ obtenerTotalCarrito }) => {
  const { platillos } = useContext(CarritoContext);
  if (platillos.length === 0) {
    console.log("No hay platillos");
    return (
      <>
        <SinPlatillos />
      </>
    );
  }

  return (
    <>
      <CardPlatillo obtenerTotalCarrito={obtenerTotalCarrito} />
    </>
  );
};

export default ContenidoCarrito;
