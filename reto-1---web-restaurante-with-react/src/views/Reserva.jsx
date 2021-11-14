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
	// const datosInputsReserva = [
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__nombres",
	// 		labelHtmlFor: "nombres",
	// 		labelClassName: "formulario__label",
	// 		labelText: "NOMBRES",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		inputId: "nombres",
	// 		inputType: "text",
	// 		inputClassName: "formulario__input",
	// 		nameInput: "nombres",
	// 		inputPlaceHolder: "INGRESE LOS NOMBRES",
	// 		pFormularioInputError1Texto: "EL CAMPO NOMBRES ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto:
	// 			"EL CAMPO NOMBRES SOLO PUEDE CONTENER LETRAS Y TIENE UN MINIMO DE 10 Y UN MAXIMO DE 35 CARACTERES.",
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__apellidos",
	// 		labelHtmlFor: "apellidos",
	// 		labelClassName: "formulario__label",
	// 		labelText: "APELLIDOS",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		inputId: "apellidos",
	// 		inputType: "text",
	// 		inputClassName: "formulario__input",
	// 		nameInput: "apellidos",
	// 		inputPlaceHolder: "INGRESE LOS APELLIDOS",
	// 		pFormularioInputError1Texto: "EL CAMPO APELLIDOS ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto:
	// 			"EL CAMPO APELLIDOS SOLO PUEDE CONTENER LETRAS Y TIENE UN MINIMO DE 10 Y UN MAXIMO DE 35 CARACTERES.",
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__cedula",
	// 		labelHtmlFor: "cedula",
	// 		labelClassName: "formulario__label",
	// 		labelText: "CEDULA",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		inputId: "cedula",
	// 		inputType: "text",
	// 		inputClassName: "formulario__input",
	// 		nameInput: "cedula",
	// 		inputPlaceHolder: "INGRESE LA CEDULA",
	// 		pFormularioInputError1Texto: "EL CAMPO CEDULA ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto:
	// 			"EL CAMPO CEDULA SOLO PUEDE CONTENER NUMEROS Y UN MAXIMO DE 10 CARACTERES.",
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__correo",
	// 		labelHtmlFor: "correo",
	// 		labelClassName: "formulario__label",
	// 		labelText: "CORREO ELECTRONICO",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		inputId: "correo",
	// 		inputType: "email",
	// 		inputClassName: "formulario__input",
	// 		nameInput: "correo",
	// 		inputPlaceHolder: "CORREO@CORREO.COM",
	// 		pFormularioInputError1Texto:
	// 			"EL CAMPO CORREO ELECTRONICO ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto: `EL CAMPO CORREO ELECTRONICO SOLO PUEDE CONTENER LETRAS,
	//           NUMEROS, PUNTOS, GUIONES, ARROVA, GUION BAJO Y MAXIMO DE
	//           CARACTERES ES 20`,
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__telefono",
	// 		labelHtmlFor: "telefono",
	// 		labelClassName: "formulario__label",
	// 		labelText: "TELEFONO",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		inputId: "telefono",
	// 		inputType: "text",
	// 		inputClassName: "formulario__input",
	// 		nameInput: "telefono",
	// 		inputPlaceHolder: "INGRESE EL TELEFONO",
	// 		pFormularioInputError1Texto: "EL CAMPO TELEFONO ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto: `EL CAMPO TELEFONO SOLO PUEDE CONTENER NUMEROS Y UN
	//        MAXIMO DE 10 CARACTERES.`,
	// 	},
	// 	{
	// 		input_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		select_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__servicio",
	// 		labelHtmlFor: "servicio",
	// 		labelClassName: "d-flex flex-row align-self-center formulario__label",
	// 		labelText: "SELECCIONE EL SERVICIO",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input align-self-center formulario__grupo-select",
	// 		valorInicial: "",
	// 		selectId: "servicio",
	// 		selectClassName: "d-flex flex-row formulario__input",
	// 		nameSelect: "servicio",
	// 		opcionesSelect: [
	// 			{ value: "CELEBRACIÓN DE CUMPLEAÑOS" },
	// 			{ value: "ANIVERSARIOS" },
	// 			{ value: "FIESTAS INFANTILES" },
	// 			{ value: "DECLARACIONES O PROPUESTAS" },
	// 			{ value: "DESPEDIDAS" },
	// 		],
	// 		pFormularioInputError1Texto: `EL CAMPO SERVICIO ES OBLIGATORIO, SELECCIONA UN TIPO DE
	//        SERVICIO.`,
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: true,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__cantidadPersonas",
	// 		labelHtmlFor: "cantidadPersonas",
	// 		labelClassName: "formulario__label",
	// 		labelText: "CANTIDAD DE PERSONAS",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		inputId: "cantidadPersonas",
	// 		inputType: "text",
	// 		inputClassName: "formulario__input",
	// 		nameInput: "cantidadPersonas",
	// 		inputPlaceHolder: "INGRESE LA CANTIDAD DE PERSONAS",
	// 		pFormularioInputError1Texto:
	// 			"EL CAMPO CANTIDAD DE PERSONAS ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto: `EL CAMPO CANTIDAD DE PERSONAS SOLO PUEDE CONTENER
	// 		NUMEROS.`,
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: false,
	// 		flatPickr_CallComponentBool: true,
	// 		checkBox_CallComponentBool: true,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__fecha",
	// 		labelHtmlFor: "fecha",
	// 		labelClassName: "formulario__label",
	// 		labelText: "FECHA DE LA RESERVA",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		flatPickrId: "fecha",
	// 		flatPickrOptions: config_fecha,
	// 		flatPickrClassName: "formulario__input",
	// 		nameFlatPickr: "fecha",
	// 		flatPickrPlaceHolder: "SELECCIONE LA FECHA",
	// 		pFormularioInputError1Texto: "EL CAMPO FECHA ES OBLIGATORIO.",
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: false,
	// 		flatPickr_CallComponentBool: true,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__hora",
	// 		labelHtmlFor: "hora",
	// 		labelClassName: "formulario__label",
	// 		labelText: "HORA DE LA RESERVA",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input",
	// 		valorInicial: "",
	// 		flatPickrId: "hora",
	// 		flatPickrOptions: config_hora,
	// 		flatPickrClassName: "formulario__input",
	// 		nameFlatPickr: "hora",
	// 		flatPickrPlaceHolder: "SELECCIONE LA HORA DE LA RESERVA",
	// 		pFormularioInputError1Texto:
	// 			"EL CAMPO HORA DE LA RESERVA ES OBLIGATORIO.",
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: true,
	// 		input_CallComponentBool: false,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: false,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__indicacionesEspeciales",
	// 		labelHtmlFor: "indicacionesEspeciales",
	// 		labelClassName: "formulario__label",
	// 		labelText: "INDICACIONES ESPECIALES",
	// 		divClassNameFormularioGrupoInput:
	// 			"d-flex flex-row formulario__grupo-input formulario__grupo-textarea",
	// 		valorInicial: "",
	// 		textAreaId: "indicacionesEspeciales",
	// 		textAreaClassName: "formulario__textarea",
	// 		nameTextArea: "indicacionesEspeciales",
	// 		textAreaPlaceHolder: "INGRESE LAS INDICACIONES ESPECIALES",
	// 		textAreaRow: 5,
	// 		pFormularioInputError1Texto:
	// 			"EL CAMPO INDICACIONES ESPECIALES ES OBLIGATORIO.",
	// 		pFormularioInputErrorTexto: `EL CAMPO INDICACIONES ESPECIALES SOLO PUEDE CONTENER
	// 		LETRAS, EL MINIMO ES DE 10 Y MAXIMO SON 200 CARACTERES.`,
	// 	},
	// 	{
	// 		select_CallComponentBool: false,
	// 		textArea_CallComponentBool: false,
	// 		input_CallComponentBool: false,
	// 		flatPickr_CallComponentBool: false,
	// 		checkBox_CallComponentBool: true,
	// 		divClassNameCol: "col-lg-12 col-md-12 d-flex justify-content-center",
	// 		divIdGrupo: "grupo__terminos",
	// 		labelHtmlFor: "terminos",
	// 		labelClassName: "formulario__label",
	// 		labelText: "ACEPTO LOS TERMINOS Y CONDICIONES",
	// 		valorInicial: "",
	// 		checkBoxId: "terminos",
	// 		checkBoxType: "checkbox",
	// 		checkBoxClassName: "formulario__checkbox",
	// 		nameCheckBox: "terminos",
	// 	},
	// ];

	// const [camposReserva, setCamposReserva] = useState({});

	// const cargarCamposReserva = (valorInicial, name, validacionCampo) => {
	// 	setCamposReserva({
	// 		...camposReserva,
	// 		[name]: {
	// 			name: valorInicial,
	// 			campoValido: validacionCampo,
	// 		},
	// 	});
	// };

	// const reiniciarCamposReserva = () => {
	// 	setCamposReserva({});
	// };

	return (
		<CantidadProvider>
			<Card />
		</CantidadProvider>
	);
};

export default Reserva;
