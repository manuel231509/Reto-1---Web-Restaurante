import React, { useContext } from "react";
import CantidadContext from "../../contexts/Inputs/InputsContext";
import { sendMailReserva } from "../../emailJS/EmailJS";
import { saberCamposVerdadero } from "./Reserva";

const ButtonReserva = () => {
	const { reiniciarCampos, valido, reiniciarCampoValido } =
		useContext(CantidadContext);

	return (
		<>
			<div className="col-lg-12 col-md-12 mt-2 text-center">
				<div className="formulario__grupo formulario__grupo-btn-enviar">
					<button
						type="submit"
						className="formulario__btn"
						onClick={(e) => {
							e.preventDefault();
							if (saberCamposVerdadero(valido)) {
								sendMailReserva(valido, reiniciarCampos, reiniciarCampoValido);
							}
						}}
					>
						RESERVAR
					</button>
					<p
						className="formulario__mensaje-exito"
						id="formulario__mensaje-exito"
					>
						<span>FORMULARIO ENVIADO EXISITOSAMENTE!</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default ButtonReserva;
