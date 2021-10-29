import React, { useState } from "react";
import initialPlatos from "../consts JSON/listadoMenu.json";
import PlatoContext from "./PlatoContext";

const PlatoProvider = ({ children }) => {
	const [platoSeleccionado, setPlatoSeleccionado] = useState(null);
	const [inputs, setInputs] = useState({});

	const selectedDish = (plato) => {
		console.log(plato);
		setPlatoSeleccionado(plato);
	};

	const cargarInputs = (valor, name) => {
		console.log("-----");
		console.log("Cargar Inputs");
		console.log("Valor");
		console.log(valor);
		console.log("name");
		console.log(name);
		setInputs({
			...inputs,
			[name]: valor,
		});
		console.log("inputs");
		console.log(inputs);
	};

	const minus = (idPlato) => {
		console.log("");
		console.log("Afuera Minus");
		console.log("input_cantidad_{idPlato}])");
		console.log(`input_cantidad_${idPlato}`);
		console.log(inputs[`input_cantidad_${idPlato}`]);

		const nombreInput = `input_cantidad_${idPlato}`;

		const cantidad_input = inputs[nombreInput];
		console.log(cantidad_input);

		if (cantidad_input !== "undefined") {
			console.log("Inputs");
			console.log(inputs);

			const rest = cantidad_input - 1;
			if (rest >= 1) {
				console.log("Es mayor la resta");
				console.log(rest);
				console.log("Inputs");
				console.log(inputs);
				cargarInputs(rest, nombreInput);
			} else {
				cargarInputs(1, nombreInput);
			}
		}
	};
	const plus = (idPlato) => {
		console.log("Afuera Plus");
		console.log(inputs);

		const nombreInput = `input_cantidad_${idPlato}`;

		const cantidad_input = inputs[nombreInput];
		console.log("CantidadP");

		console.log(cantidad_input);

		if (cantidad_input !== undefined) {
			console.log("No esta undefined");
			console.log("Inputs");
			console.log(inputs);
			const suma = cantidad_input + 1;
			if (suma >= 1) {
				console.log("Es mayor la suma");
				console.log(suma);
				console.log("Inputs");
				console.log(inputs);
				cargarInputs(suma, nombreInput);
			}
		} else {
			cargarInputs(1, nombreInput);
		}
	};

	const handleInputsChange = (event) => {
		console.log("HandleInputCantidadChange");
		console.log("Event");
		console.log(event);
		console.log(event.target.name);

		cargarInputs(event.target.value, event.target.name);
		console.log("Handle inputs");
		console.log(inputs);
	};

	const data = {
		listMenu: initialPlatos,
		platoSeleccionado,
		selectedDish,
		inputs,
		minus,
		plus,
		handleInputsChange,
		cargarInputs,
	};
	return <PlatoContext.Provider value={data}>{children}</PlatoContext.Provider>;
};

export default PlatoProvider;
