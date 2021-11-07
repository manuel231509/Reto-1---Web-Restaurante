import React from "react";
import "../components/Inicio/styles/estilos-inicio.css";
import Carrusel from "../components/Inicio/Carrusel";
import Principal from "../components/Inicio/Principal";
import Destacados from "../components/Inicio/Destacados";
import Servicios from "../components/Inicio/Servicios";
import Testimonios from "../components/Inicio/Testimonios";

const Inicio = () => {
	return (
		<>
			<div id="inicio">
				<Carrusel />
				<Principal />
				<Destacados />
				<Servicios />
				<Testimonios />
			</div>
		</>
	);
};
export default Inicio;
