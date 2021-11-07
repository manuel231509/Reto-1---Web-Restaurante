import React, { useContext } from "react";
import CarritoContext from "../../contexts/CarritoContext";
import CardPlatillo from "./CardPlatillo";

const ContenidoCarrito = ({ obtenerTotalCarrito }) => {
	const { platillos } = useContext(CarritoContext);
	if (platillos.length !== 0) {
		return (
			<>
				<CardPlatillo obtenerTotalCarrito={obtenerTotalCarrito} />
			</>
		);
	}
	return null;
};

export default ContenidoCarrito;
