import React, { useState } from "react";

import EtiquetaInput from "../Creacion de Etiquetas HTML/EtiquetaInput";
import EtiquetaSelect from "../Creacion de Etiquetas HTML/EtiquetaSelect";
import { handleInputsChange } from "./ValidacionCampos";
const Input = ({ objecto }) => {
	const [inputs, setInputs] = useState({});

	const cargarInputs = (valorInicial, name, validacionCampo, error) => {
		console.log("");
		console.log(
			"------------....................,,,,,,,,,, INICIO cargarInputs"
		);
		console.log("CargarInputs");
		console.log("valorInicial");
		console.log(valorInicial);
		console.log("Name");
		console.log(name);
		console.log("ValidacionCampo");
		console.log(validacionCampo);
		console.log("Error");
		console.log(error);
		setInputs({
			...inputs,
			[name]: {
				valor: valorInicial,
				campoValido: validacionCampo,
				error: error,
			},
		});
		console.log("inputs");
		console.log(inputs);
		console.log("------------....................,,,,,,,,,, FIN cargarInputs");
		console.log("");
	};
	const inicializarInputs = (valorInicial, nombreInput, cargarInputs) => {
		console.log("");
		console.log(`""""""""""""""""""""""""""""""" INICIO inicializarInputs`);
		console.log("INICIALIZANDO");
		console.log("inputs");
		console.log(inputs);
		console.log(inputs[nombreInput]?.valor);
		console.log(inputs[nombreInput]);
		console.log("ValorIncial");
		console.log(valorInicial);
		if (inputs[nombreInput]?.valor === undefined) {
			console.log("No existe");
			cargarInputs(valorInicial, nombreInput, false, {
				error: false,
				error1: false,
			});
		} /* else {
			console.log("Si ya existe");
			console.log("inputs[nombreInput]?.valor");
			console.log(inputs[nombreInput].valor);
			console.log("valorInicial");
			console.log(valorInicial);
			if (valorInicial !== "") {
				console.log("Es diferente de vacio");
			} */
		// cargarInputs(valorInicial, nombreInput, false, {
		// 	error: false,
		// 	error1: false,
		// });
		// }
		console.log("despues");
		console.log("inputs");
		console.log(inputs);
		console.log(`""""""""""""""""""""""""""""""" FIN inicializarInputs`);
		console.log("");
	};
	return (
		<>
			<div className={objecto.divClassNameCol}>
				<EtiquetaInput
					objecto={objecto}
					inputs={inputs}
					inicializarInputs={inicializarInputs}
					cargarInputs={cargarInputs}
					handleInputsChange={handleInputsChange}
				/>
				<EtiquetaSelect
					objecto={objecto}
					inputs={inputs}
					inicializarInputs={inicializarInputs}
					cargarInputs={cargarInputs}
					handleInputsChange={handleInputsChange}
				/>
			</div>
		</>
	);
};

export default Input;
