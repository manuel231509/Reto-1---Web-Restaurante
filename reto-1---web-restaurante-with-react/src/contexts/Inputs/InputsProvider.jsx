import React, { useState } from "react";
import CantidadContext from "./InputsContext";

const CantidadProvider = ({ children }) => {
	const [inputs, setInputs] = useState({});

	const cargarCampos = (valor, name, validacionCampo, error) => {
		setInputs({
			...inputs,
			[name]: {
				valor: valor,
				campoValido: validacionCampo,
				error: error,
			},
		});
	};

	const reiniciarCampos = () => {
		setInputs({});
	};

	const [valido, setValido] = useState({});

	const campoValido = (valorInicial, name, validacionCampo) => {
		setValido({
			...valido,
			[name]: {
				name: valorInicial,
				campoValido: validacionCampo,
			},
		});
	};

	const reiniciarCampoValido = () => {
		setValido({});
	};

	const data = {
		inputs,
		cargarCampos,
		reiniciarCampos,
		valido,
		campoValido,
		reiniciarCampoValido,
	};
	return (
		<CantidadContext.Provider value={data}>{children}</CantidadContext.Provider>
	);
};

export default CantidadProvider;
