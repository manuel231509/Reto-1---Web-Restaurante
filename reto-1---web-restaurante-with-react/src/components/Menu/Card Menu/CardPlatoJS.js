
const minus = (idPlato, inputs, cargarInputs) => {
	const nombreInput = `input_cantidad_${idPlato}`;

	const cantidad_input = inputs[nombreInput]?.valor;

	if (cantidad_input !== "undefined") {
		if (cantidad_input !== "") {
			const rest = parseInt(cantidad_input) - 1;
			if (rest >= 1) {
				cargarInputs(rest, nombreInput, true, {
					error: false,
					error1: false,
				});
			}
		}
	} else {
		cargarInputs(1, nombreInput, true, {
			error: false,
			error1: false,
		});
	}
};
const plus = (idPlato, inputs, cargarInputs) => {
	const nombreInput = `input_cantidad_${idPlato}`;

	const cantidad_input = inputs[nombreInput]?.valor;

	if (cantidad_input !== undefined) {
		if (cantidad_input !== "") {
			const suma = parseInt(cantidad_input) + 1;
			if (suma >= 1) {
				cargarInputs(suma, nombreInput, true, {
					error: false,
					error1: false,
				});
			}
		}
	} else {
		cargarInputs(1, nombreInput, true, {
			error: false,
			error1: false,
		});
	}
};

export { minus, plus };
