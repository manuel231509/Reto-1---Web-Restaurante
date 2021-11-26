import React from "react";
import "../components/Reserva/Styles/estilo-flatpickr.css";
import "../components/Reserva/Styles/estilos-reserva.css";
import Input from "../components/Inputs/Input";
import DatosInputsReserva from "../consts json/Reserva/DatosInputsReserva.json";
import ButtonReserva from "../components/Reserva/ButtonReserva";
import CantidadProvider from "../contexts/Inputs/InputsProvider";

const Card = () => {
	return (
		<>
			<div className="card card-principal-reserva">
				<div className="card-body">
					<h1 className="card-title mt-5 text-center">HAZ TU RESERVA</h1>
					<h2 className="card-title mb-5 text-center">¡YA!</h2>
					<div className="row d-flex justify-content-center">
						<div className="col-lg-12 col-md-12 mb-md-0 mt-0 reserva	d-flex justify-content-center">
							<div className="card">
								<div className="card-body">
									<form
										id="formulario_reserva"
										className="row formulario_reserva d-flex"
										noValidate
									>
										{DatosInputsReserva.map((objeto, index) => {
											Object.assign(objeto, { id: index });
											return <Input key={index} objeto={objeto} />;
										})}
										<ButtonReserva />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Reserva = () => {

	return (
		<CantidadProvider>
			<Card />
		</CantidadProvider>
	);
};

export default Reserva;
