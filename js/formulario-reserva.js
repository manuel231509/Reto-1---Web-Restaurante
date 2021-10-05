const formulario = document.getElementById("formulario_reserva");
const inputs = document.querySelectorAll("#formulario_reserva input");
const selects = document.querySelectorAll("#formulario_reserva select");
const textareas = document.querySelectorAll("#formulario_reserva textarea");
const terminos = document.getElementById("terminos");

const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{10,35}$/,
	apellidos: /^[a-zA-ZÀ-ÿ\s]{10,35}$/,
	cedula: /^[0-9]\d{0,9}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,20}$/,
	telefono: /^[0-9]\d{0,9}$/,
	cantidadPersonas: /^[0-9]+$/,
	indicacionesEspeciales: /^.{10,200}$/,
};

let campos = {
	nombres: false,
	apellidos: false,
	cedula: false,
	correo: false,
	telefono: false,
	servicio: false,
	cantidadPersonas: false,
	fecha: false,
	hora: false,
	indicacionesEspeciales: false,
};
/* -------------- Class Formulario Grupo Incorrecto -------------- */
const removeClassFormularioGrupoIncorrecto = (campo) => {
	document
		.getElementById(`grupo__${campo}`)
		.classList.remove("formulario__grupo-incorrecto");
};
const addClassFormularioGrupoIncorrecto = (campo) => {
	document
		.getElementById(`grupo__${campo}`)
		.classList.add("formulario__grupo-incorrecto");
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Grupo Correcto -------------- */
const removeClassFormularioGrupoCorrecto = (campo) => {
	document
		.getElementById(`grupo__${campo}`)
		.classList.remove("formulario__grupo-correcto");
};
const addClassFormularioGrupoCorrecto = (campo) => {
	document
		.getElementById(`grupo__${campo}`)
		.classList.add("formulario__grupo-correcto");
};
/* -------------- Fin -------------- */

/* -------------- Class Check Circle -------------- */
const addClassCheckCircle = (campo) => {
	document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
};
const removeClassCheckCircle = (campo) => {
	document
		.querySelector(`#grupo__${campo} i`)
		.classList.remove("fa-check-circle");
};
/* -------------- Fin -------------- */

/* -------------- Class Times Circle -------------- */
const removeClassTimesCircle = (campo) => {
	document
		.querySelector(`#grupo__${campo} i`)
		.classList.remove("fa-times-circle");
};
const addClassTimesCircle = (campo) => {
	document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Input Error Activo -------------- */
const removeClassFormularioInputErrorActivo = (campo, error) => {
	document
		.querySelector(`#grupo__${campo} .formulario__input-${error}`)
		.classList.remove(`formulario__input-${error}-activo`);
};
const addClassFormularioInputErrorActivo = (campo, error) => {
	document
		.querySelector(`#grupo__${campo} .formulario__input-${error}`)
		.classList.add(`formulario__input-${error}-activo`);
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Input Check -------------- */
const addClassFormularioInputCheck = (campo) => {
	document
		.querySelector(
			`#grupo__${campo} .formulario__grupo-input .formulario__input`
		)
		.classList.add("formulario__input-check");
};
const removeClassFormularioInputCheck = (campo) => {
	document
		.querySelector(
			`#grupo__${campo} .formulario__grupo-input .formulario__input`
		)
		.classList.remove("formulario__input-check");
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario TextArea Check -------------- */
const addClassFormularioTextAreaCheck = (campo) => {
	document
		.querySelector(
			`#grupo__${campo} .formulario__grupo-input .formulario__textarea`
		)
		.classList.add("formulario__input-check");
};
const removeClassFormularioTextAreaCheck = (campo) => {
	document
		.querySelector(
			`#grupo__${campo} .formulario__grupo-input .formulario__textarea`
		)
		.classList.remove("formulario__input-check");
};
/* -------------- Fin -------------- */

/* -------------- Class Formulario Mensaje Exito Activo -------------- */
const addClassFormularioMensajeExitoActivo = () => {
	document
		.getElementById("formulario__mensaje-exito")
		.classList.add("formulario__mensaje-exito-activo");
};
const removeClassFormularioMensajeExitoActivo = () => {
	document
		.getElementById("formulario__mensaje-exito")
		.classList.remove("formulario__mensaje-exito-activo");
};
/* -------------- Fin -------------- */

/* -------------- Formulario Mensaje Activo -------------- */
const addClassFormularioMensajeActivo = () => {
	document
		.getElementById("formulario__mensaje")
		.classList.add("formulario__mensaje-activo");
};
const removeClassFormularioMensajeActivo = () => {
	document
		.getElementById("formulario__mensaje")
		.classList.remove("formulario__mensaje-activo");
};
/* -------------- Fin -------------- */

const addClassTrue = (campo, error) => {
	removeClassFormularioGrupoIncorrecto(campo);

	addClassFormularioGrupoCorrecto(campo);

	addClassCheckCircle(campo);

	removeClassTimesCircle(campo);

	removeClassFormularioInputErrorActivo(campo, error);

	if (campo != "indicacionesEspeciales") {
		addClassFormularioInputCheck(campo);
	} else {
		addClassFormularioTextAreaCheck(campo);
	}

	campos[campo] = true;
};

const addClassFalse = (campo, error) => {
	addClassFormularioGrupoIncorrecto(campo);

	removeClassFormularioGrupoCorrecto(campo);

	addClassTimesCircle(campo);

	removeClassCheckCircle(campo);

	addClassFormularioInputErrorActivo(campo, error);

	if (campo != "indicacionesEspeciales") {
	} else {
		removeClassFormularioTextAreaCheck(campo);
	}

	campos[campo] = false;
};

const validarCampo = (expresion, input, campo, error) => {
	if (expresion.test(input.value)) {
		addClassTrue(campo, error);
	} else {
		addClassFalse(campo, error);
	}
};

const validarCampoVacio = (expresion, e) => {
	const inputName = e.target.name;

	if (e.target.value == "") {
		removeClassFormularioInputErrorActivo(inputName, "error");
		validarCampo(expresion, e.target, inputName, "error1");
	} else {
		removeClassFormularioInputErrorActivo(inputName, "error1");
		validarCampo(expresion, e.target, inputName, "error");
	}
};

const validarCampoSelect = (input, campo, error) => {
	if (input.value != "") {
		addClassTrue(campo, error);
	} else {
		addClassFalse(campo, error);
	}
};
let t = null;
let am_pm = null;

const validarBackspace = (
	inputHora,
	flatpickr_hora,
	flatpickr_minutos,
	flatpickr_am_pm,
	hora,
	minutos,
	e
) => {
	if (e.key === "Backspace") {
		inputHora.value = t;
		let th = t.split(":")[0];
		let tm = t.split(":")[1];
		//th = th < 10 ? ["0" + th].slice(-th.length) : th;
		if (am_pm === "PM") {
			if (parseInt(th) != 12) {
				th = parseInt(th) - 12;
				th = ["0" + th].slice(-th.length);
				flatpickr_hora.value = th;
			} else {
				flatpickr_hora.value = th;
			}

			flatpickr_am_pm.innerHTML = am_pm;
		} else {
			flatpickr_am_pm.innerHTML = am_pm;
			flatpickr_hora.value = th;
		}
		flatpickr_minutos.value = tm;
	} else {
		t = hora + ":" + minutos;
		am_pm = flatpickr_am_pm.innerHTML;
		inputHora.value = t;
	}
};

const validarCampoHora = (input, campo, error, e) => {
	const flatpickr_hora = document.getElementsByClassName("numInput")[1];
	const flatpickr_minutos = document.getElementsByClassName("numInput")[2];

	const flatpickr_am_pm = document.getElementsByClassName("flatpickr-am-pm")[0];

	let hora = validarFlatpickrHora(flatpickr_hora, flatpickr_am_pm);
	let minutos = flatpickr_minutos.value;

	const inputHora = document.getElementById("hora");
	validarBackspace(
		inputHora,
		flatpickr_hora,
		flatpickr_minutos,
		flatpickr_am_pm,
		hora,
		minutos,
		e
	);

	if (input.value != "") {
		addClassTrue(campo, error);
	} else {
		addClassFalse(campo, error);
	}
};

const validarFlatpickrHora = (flatpickr_hora, flatpickr_am_pm) => {
	let flh = flatpickr_hora.value;
	if (flatpickr_am_pm.innerHTML === "PM") {
		if (flh != 12) {
			return String(parseInt(flh) + 12);
		} else {
			return flh;
		}
	} else {
		return flh;
	}
};

const validarFormulario = (e) => {
	const campo = e.target;
	switch (campo.name) {
		case "nombres":
			validarCampoVacio(expresiones.nombres, e);
			break;
		case "apellidos":
			validarCampoVacio(expresiones.apellidos, e);
			break;
		case "cedula":
			validarCampoVacio(expresiones.cedula, e);
			break;
		case "correo":
			validarCampoVacio(expresiones.correo, e);
			break;
		case "telefono":
			validarCampoVacio(expresiones.telefono, e);
			break;
		case "servicio":
			validarCampoSelect(campo, campo.name, "error");
			break;
		case "cantidadPersonas":
			validarCampoVacio(expresiones.cantidadPersonas, e);
			break;
		case "fecha":
			validarCampoSelect(campo, campo.name, "error");
			break;
		case "hora":
			validarCampoHora(campo, campo.name, "error", e);
			break;
		case "indicacionesEspeciales":
			validarCampoVacio(expresiones.indicacionesEspeciales, e);
			break;
		default:
			break;
	}
};

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
	input.addEventListener("focus", validarFormulario);
});

selects.forEach((select) => {
	select.addEventListener("click", validarFormulario);
	select.addEventListener("blur", validarFormulario);
});

textareas.forEach((textarea) => {
	textarea.addEventListener("keyup", validarFormulario);
	textarea.addEventListener("blur", validarFormulario);
});

const removeClassFormInputCheck = () => {
	for (const campo in campos) {
		if (campos.hasOwnProperty.call(campos, campo)) {
			const element = campos[campo];
			if (element == false) {
				const error =
					campo == "servicio" ||
					campo == "cantidadPersonas" ||
					campo == "fecha" ||
					campo == "hora"
						? "error"
						: "error1";
				addClassFalse(campo, error);
			}
		}
	}
};

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	if (
		campos.nombres &&
		campos.apellidos &&
		campos.cedula &&
		campos.correo &&
		campos.telefono &&
		campos.cantidadPersonas &&
		campos.indicacionesEspeciales &&
		terminos.checked
	) {
		formulario.reset();
		addClassFormularioMensajeExitoActivo();
		setTimeout(() => {
			removeClassFormularioMensajeExitoActivo();
			document
				.querySelectorAll(".formulario__grupo-correcto")
				.forEach((icono) => {
					icono.classList.remove("formulario__grupo-correcto");
				});
			document.querySelectorAll(".formulario__input-check").forEach((data) => {
				data.classList.remove("formulario__input-check");
			});
			campos = {
				nombres: false,
				apellidos: false,
				cedula: false,
				correo: false,
				telefono: false,
				servicio: false,
				cantidadPersonas: false,
				fecha: false,
				hora: false,
				indicacionesEspeciales: false,
			};
		}, 2000);
	} else {
		addClassFormularioMensajeActivo();
		setTimeout(() => {
			removeClassFormularioMensajeActivo();
			removeClassFormInputCheck();
		}, 2000);
	}
});