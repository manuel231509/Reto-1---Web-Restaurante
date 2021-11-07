import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import CantidadContext from "../../contexts/Inputs/InputsContext";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import { handleInputsChange } from "../Inputs/ValidacionCampos";

const Label = ({ objeto }) => {
	if (objeto.label_CallComponentBool) {
		return (
			<label
				htmlFor={`${objeto.labelHtmlFor}_${objeto.id}`}
				className={objeto.labelClassName}
			>
				{objeto.labelText}
			</label>
		);
	}
	return null;
};

const EtiquetaInput = ({ objeto }) => {
	const { inputs, cargarCampos, campoValido } = useContext(CantidadContext);

	const inicializarInputs = (valorInicial, nombreInput, cargarInputs) => {
		if (inputs[nombreInput]?.valor === undefined) {
			cargarInputs(
				valorInicial,
				nombreInput,
				valorInicial !== "" ? true : false,
				{
					error: false,
					error1: false,
				}
			);
		}
	};

	if (objeto.input_CallComponentBool) {
		return (
			<>
				<div
					className={
						inputs[`${objeto.nameInput}_${objeto.id}`]?.error.error === false &&
						inputs[`${objeto.nameInput}_${objeto.id}`]?.error.error1 === false
							? inputs[`${objeto.nameInput}_${objeto.id}`]?.campoValido
								? "formulario__grupo formulario__grupo-correcto"
								: "formulario__grupo"
							: "formulario__grupo formulario__grupo-incorrecto"
					}
					id={objeto.divIdGrupo}
				>
					<Label objeto={objeto} />
					<div className={objeto.divClassNameFormularioGrupoInput}>
						<input
							id={`${objeto.inputId}_${objeto.id}`}
							type={objeto.inputType}
							name={`${objeto.nameInput}_${objeto.id}`}
							value={
								inputs[`${objeto.nameInput}_${objeto.id}`]?.valor === undefined
									? inicializarInputs(
											objeto.valorInicial,
											`${objeto.nameInput}_${objeto.id}`,
											cargarCampos
									  )
									: inputs[`${objeto.nameInput}_${objeto.id}`]?.valor
							}
							onChange={(e) => handleInputsChange(e, cargarCampos, campoValido)}
							onBlur={(e) => handleInputsChange(e, cargarCampos, campoValido)}
							className={
								inputs[`${objeto.nameInput}_${objeto.id}`]?.campoValido
									? `${objeto.inputClassName} formulario__input-check`
									: objeto.inputClassName
							}
							placeholder={objeto.inputPlaceHolder}
							required
						/>

						<i className="d-flex align-items-center formulario__validacion-estado">
							<EtiquetaFontAwesomeIcon
								objectArray={{
									fontAwesomeIcon_CallComponentBool:
										objeto.fontAwesomeIcon_CallComponentBool,
									fontAwesomeIcon_className: objeto.fontAwesomeIcon_className,
									fontAwesomeIcon_icon: inputs[
										`${objeto.nameInput}_${objeto.id}`
									]?.campoValido
										? faCheckCircle
										: faTimesCircle,
								}}
							/>
						</i>
					</div>
					<p
						className={
							!inputs[`${objeto.nameInput}_${objeto.id}`]?.saber &&
							inputs[`${objeto.nameInput}_${objeto.id}`]?.error?.error1
								? "invalid-feedback formulario__input-error1-activo"
								: "invalid-feedback formulario__input-error1"
						}
					>
						{objeto.pFormularioInputError1Texto}
					</p>
					<p
						className={
							!inputs[`${objeto.nameInput}_${objeto.id}`]?.saber &&
							inputs[`${objeto.nameInput}_${objeto.id}`]?.error?.error
								? "invalid-feedback formulario__input-error-activo"
								: "invalid-feedback formulario__input-error"
						}
					>
						{objeto.pFormularioInputErrorTexto}
					</p>
				</div>
			</>
		);
	}
	return <></>;
};

export default EtiquetaInput;
