import React from "react";
import { useState } from "react";
import { obtenerPlatillosLocalStorage } from "../localStorage/LocalStorage";
import CarritoContext from "./CarritoContext";

const CarritoProvider = ({ children }) => {
  const [platillos, setPlatillos] = useState(
    obtenerPlatillosLocalStorage("platillos")
  );

  const handleRemoveItem = (id) => {
    console.log("HandleRemoveItem");
    console.log(id);
    const platillosTemp = [...platillos];
    platillosTemp.splice(id, 1);
    console.log(platillosTemp);
    setPlatillos(platillosTemp);
  };

  const handleRemoveAllItems = () => {
    console.log("HandleRemoveAllItems");
    setPlatillos([]);
  };

  const data = {
    platillos,
    handleRemoveItem,
    handleRemoveAllItems,
  };

  return (
    <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
  );
};

export default CarritoProvider;
