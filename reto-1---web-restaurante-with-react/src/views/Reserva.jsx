import React from "react";
import "../components/Reserva/Styles/estilo-flatpickr.css";
import "../components/Reserva/Styles/estilos-reserva.css";
import Input from "../components/Inputs/Input";
/* import Flatpickr from "react-flatpickr";
import { config_fecha } from "../components/Reserva/flatpickr"; */

const Reserva = () => {
	// const [date, setDate] = useState(new Date());
	// const [servicio, setServicio] = useState("");

	/* const initialInptus = {
		nombres: { valor: "", campoValido: false, error: false },
	}; */

	/* const opcionesServicio = [
		{ value: "CELEBRACIÓN DE CUMPLEAÑOS" },
		{ value: "ANIVERSARIOS" },
		{ value: "FIESTAS INFANTILES" },
		{ value: "DECLARACIONES O PROPUESTAS" },
		{ value: "DESPEDIDAS" },
	]; */

	const datosInputsReserva = [
		{
			select_CallComponentBool: false,
			textArea_CallComponentBool: false,
			divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
			divIdGrupo: "grupo__nombres",
			labelHtmlFor: "nombres",
			labelClassName: "formulario__label",
			labelText: "NOMBRES",
			divClassNameFormularioGrupoInput:
				"d-flex flex-row formulario__grupo-input",
			valorInicial: "",
			input_CallComponentBool: true,
			inputId: "nombres",
			inputType: "text",
			inputClassName: "formulario__input",
			nameInput: "nombres",
			inputPlaceHolder: "INGRESE LOS NOMBRES",
			pFormularioInputError1Texto: "EL CAMPO NOMBRES ES OBLIGATORIO.",
			pFormularioInputErrorTexto:
				"EL CAMPO NOMBRES SOLO PUEDE CONTENER LETRAS Y TIENE UN MINIMO DE 10 Y UN MAXIMO DE 35 CARACTERES.",
		},
		{
			select_CallComponentBool: false,
			textArea_CallComponentBool: false,
			divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
			divIdGrupo: "grupo__apellidos",
			labelHtmlFor: "apellidos",
			labelClassName: "formulario__label",
			labelText: "APELLIDOS",
			divClassNameFormularioGrupoInput:
				"d-flex flex-row formulario__grupo-input",
			valorInicial: "",
			input_CallComponentBool: true,
			inputId: "apellidos",
			inputType: "text",
			inputClassName: "formulario__input",
			nameInput: "apellidos",
			inputPlaceHolder: "INGRESE LOS APELLIDOS",
			pFormularioInputError1Texto: "EL CAMPO APELLIDOS ES OBLIGATORIO.",
			pFormularioInputErrorTexto:
				"EL CAMPO APELLIDOS SOLO PUEDE CONTENER LETRAS Y TIENE UN MINIMO DE 10 Y UN MAXIMO DE 35 CARACTERES.",
		},
		{
			select_CallComponentBool: false,
			textArea_CallComponentBool: false,
			divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
			divIdGrupo: "grupo__cedula",
			labelHtmlFor: "cedula",
			labelClassName: "formulario__label",
			labelText: "CEDULA",
			divClassNameFormularioGrupoInput:
				"d-flex flex-row formulario__grupo-input",
			valorInicial: "",
			input_CallComponentBool: true,
			inputId: "cedula",
			inputType: "text",
			inputClassName: "formulario__input",
			nameInput: "cedula",
			inputPlaceHolder: "INGRESE LA CEDULA",
			pFormularioInputError1Texto: "EL CAMPO CEDULA ES OBLIGATORIO.",
			pFormularioInputErrorTexto:
				"EL CAMPO CEDULA SOLO PUEDE CONTENER NUMEROS Y UN MAXIMO DE 10 CARACTERES.",
		},
		{
			select_CallComponentBool: false,
			textArea_CallComponentBool: false,
			divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
			divIdGrupo: "grupo__correo",
			labelHtmlFor: "correo",
			labelClassName: "formulario__label",
			labelText: "CORREO ELECTRONICO",
			divClassNameFormularioGrupoInput:
				"d-flex flex-row formulario__grupo-input",
			valorInicial: "",
			input_CallComponentBool: true,
			inputId: "correo",
			inputType: "email",
			inputClassName: "formulario__input",
			nameInput: "correo",
			inputPlaceHolder: "CORREO@CORREO.COM",
			pFormularioInputError1Texto:
				"EL CAMPO CORREO ELECTRONICO ES OBLIGATORIO.",
			pFormularioInputErrorTexto: `EL CAMPO CORREO ELECTRONICO SOLO PUEDE CONTENER LETRAS,
            NUMEROS, PUNTOS, GUIONES, ARROVA, GUION BAJO Y MAXIMO DE
            CARACTERES ES 20`,
		},
		{
			select_CallComponentBool: false,
			textArea_CallComponentBool: false,
			divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
			divIdGrupo: "grupo__telefono",
			labelHtmlFor: "telefono",
			labelClassName: "formulario__label",
			labelText: "TELEFONO",
			divClassNameFormularioGrupoInput:
				"d-flex flex-row formulario__grupo-input",
			valorInicial: "",
			input_CallComponentBool: true,
			inputId: "telefono",
			inputType: "text",
			inputClassName: "formulario__input",
			nameInput: "telefono",
			inputPlaceHolder: "INGRESE EL TELEFONO",
			pFormularioInputError1Texto: "EL CAMPO TELEFONO ES OBLIGATORIO.",
			pFormularioInputErrorTexto: `EL CAMPO TELEFONO SOLO PUEDE CONTENER NUMEROS Y UN
         MAXIMO DE 10 CARACTERES.`,
		},
		{
			input_CallComponentBool: false,
			textArea_CallComponentBool: false,
			divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
			divIdGrupo: "grupo__servicio",
			labelHtmlFor: "servicio",
			labelClassName: "d-flex flex-row align-self-center formulario__label",
			labelText: "SELECCIONE EL SERVICIO",
			divClassNameFormularioGrupoInput:
				"d-flex flex-row formulario__grupo-input align-self-center formulario__grupo-select",
			valorInicial: "",
			select_CallComponentBool: true,
			selectId: "servicio",
			selectClassName: "d-flex flex-row formulario__input",
			nameSelect: "servicio",
			opcionesSelect: [
				{ value: "CELEBRACIÓN DE CUMPLEAÑOS" },
				{ value: "ANIVERSARIOS" },
				{ value: "FIESTAS INFANTILES" },
				{ value: "DECLARACIONES O PROPUESTAS" },
				{ value: "DESPEDIDAS" },
			],
			pFormularioInputError1Texto: `EL CAMPO SERVICIO ES OBLIGATORIO, SELECCIONA UN TIPO DE
         SERVICIO.`,
		},
	];

	return (
		<>
			<div className="card card-principal">
				<div className="card-body">
					<h1 className="card-title mt-5 text-center">HAZ TU RESERVA</h1>
					<h2 className="card-title mb-5 text-center">¡YA!</h2>
					<div className="row d-flex justify-content-center">
						<div
							className="
							col-lg-12 col-md-12
							mb-md-0
							mt-0
							reserva
							d-flex
							justify-content-center
						"
						>
							<div className="card">
								<div className="card-body">
									<form
										id="formulario_reserva"
										className="row formulario_reserva d-flex"
										noValidate
									>
										{datosInputsReserva.map((dato, index) => {
											console.log(dato);
											Object.assign(dato, { id: index });
											dato.nameInput = dato.nameInput + `_${index}`;
											dato.nameSelect = dato.nameSelect + `_${index}`;
											dato.labelHtmlFor = dato.labelHtmlFor + `_${index}`;
											return <Input key={index} objecto={dato} />;
										})}
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

export default Reserva;
