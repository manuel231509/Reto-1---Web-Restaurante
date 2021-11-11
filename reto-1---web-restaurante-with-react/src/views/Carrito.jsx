import React from "react";
import "../components/Carrito/styles/estilos-carrito.css";
import ExteriorCarrito from "../components/Carrito/ExteriorCarrito";
import CarritoProvider from "../contexts/Carrito/CarritoProvider";

const Carrito = () => {
  return (
    <>
      <CarritoProvider>
        <ExteriorCarrito />
      </CarritoProvider>
    </>
  );
};

export default Carrito;
