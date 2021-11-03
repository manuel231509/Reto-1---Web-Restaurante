const expresiones = {
	cantidad: new RegExp(/^[1-9]\d{0,2}$/),
	nombres: /^[a-zA-ZÀ-ÿ\s]{10,35}$/,
	apellidos: /^[a-zA-ZÀ-ÿ\s]{10,35}$/,
	cedula: /^[0-9]\d{0,9}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,20}$/,
	telefono: /^[0-9]\d{0,9}$/,
	cantidadPersonas: /^[0-9]+$/,
	indicacionesEspeciales: /^.{10,200}$/,
};

const validarCampo = (expresion, valor) => {
	let saber = false;
	let error = {
		error: false,
		error1: false,
	};
	// console.log(".......... INICIO");
	// console.log("ValidarCampo");
	// console.log("valor");
	// console.log(valor);
	// console.log("ESPRESION");
	// console.log(expresion);
	if (valor !== "") {
		// console.log("Entro aqui es diferente de vacio");
		// console.log("expresion.test(valor)");
		// console.log(expresion.test(valor));
		if (expresion !== "servicio") {
			if (expresion.test(valor)) {
				// console.log("DENTRO DEL IF");
				saber = true;
			} else {
				saber = false;
				error.error = true;
			}
		} else {
			saber = true;
		}
	} else {
		/* 
		console.log("-------------s-s-----------s-s-s-s");
		console.log("ES IGUAL A VACIOOOOOOOOOO"); */
		saber = false;
		error.error1 = true;
	}
	// console.log(".......... FIN");

	return { saber, error };
};

const validarFormulario = (nameExpresion, value) => {
	let valCampo = null; /* 
	console.log("/////////////////////// INICIO");
	console.log("VALIDARFORMULARIO");
	console.log("nameExpresion");
	console.log(nameExpresion); */
	switch (nameExpresion) {
		case "cantidad":
			valCampo = validarCampo(expresiones.cantidad, value);
			break;
		case "nombres":
			console.log("ES NOMBRE");
			valCampo = validarCampo(expresiones.nombres, value);
			break;
		case "apellidos":
			valCampo = validarCampo(expresiones.apellidos, value);
			break;
		case "cedula":
			valCampo = validarCampo(expresiones.cedula, value);
			break;
		case "correo":
			valCampo = validarCampo(expresiones.correo, value);
			break;
		case "telefono":
			valCampo = validarCampo(expresiones.telefono, value);
			break;
		case "servicio":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "cantidadPersonas":
			valCampo = validarCampo(expresiones.cantidadPersonas, value);
			break;
		case "indicacionesEspeciales":
			valCampo = validarCampo(expresiones.indicacionesEspeciales, value);
			break;
		default:
			break;
	}
	// console.log("/////////////////////// FIN");
	return valCampo;
};

const handleInputsChange = (event, cargarInputs) => {
	console.log("target.value");
	console.log(event.target.value);
	console.log("target.name");
	console.log(event.target.name);
	const { value, name } = event.target;
	console.log("---.....--------........... INICIO HANDLEINPUTSCHANGE");
	console.log("HANDLEINPUTSCHANGE");
	// console.log("NAME ---------");
	// console.log(name);
	const nameExpresion = name.split("_")[0];
	console.log("nameExpresion");
	console.log(nameExpresion);
	const valCampo = validarFormulario(nameExpresion, value);
	// console.log("VALCAMPO .....,,,,");
	// console.log(valCampo);
	// console.log("valCampo.saber");
	// console.log(valCampo.saber);
	// console.log("valCampo.error");
	// console.log(valCampo.error);
	cargarInputs(value, name, valCampo.saber, valCampo.error);
	console.log("---.....--------........... FIN HANDLEINPUTSCHANGE");
	console.log("");
};

const inicializarInputs = (valorInicial, nombreInput, cargarInputs) => {
	// console.log("ValorIncial");
	// console.log(valorInicial);
	cargarInputs(valorInicial, nombreInput, false, {
		error: false,
		error1: false,
	});
};

export { handleInputsChange, inicializarInputs };
