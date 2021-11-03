import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";

const EtiquetaInput = ({
	objecto,
	inputs,
	inicializarInputs,
	cargarInputs,
	handleInputsChange,
}) => {
	if (objecto.input_CallComponentBool) {
		return (
			<>
				<div
					className={
						inputs[objecto.nameInput]?.error.error === false &&
						inputs[objecto.nameInput]?.error.error1 === false
							? inputs[objecto.nameInput]?.campoValido
								? "formulario__grupo formulario__grupo-correcto"
								: "formulario__grupo"
							: "formulario__grupo formulario__grupo-incorrecto"
					}
					id={objecto.divIdGrupo}
				>
					<label
						htmlFor={objecto.labelHtmlFor}
						className={objecto.labelClassName}
					>
						{objecto.labelText}
					</label>

					<div className={objecto.divClassNameFormularioGrupoInput}>
						<input
							id={`${objecto.inputId}_${objecto.id}`}
							type={objecto.inputType}
							name={objecto.nameInput}
							value={
								inputs[objecto.nameInput]?.valor === undefined
									? inicializarInputs(
											objecto.valorInicial,
											objecto.nameInput /* `input_cantidad_${plato.idPlato}` */,
											cargarInputs
									  )
									: inputs[objecto.nameInput].valor
							}
							onChange={(e) => handleInputsChange(e, cargarInputs)}
							className={
								inputs[
									objecto.nameInput /* `input_cantidad_${plato.idPlato}` */
								]?.campoValido
									? `${objecto.inputClassName} formulario__input-check`
									: objecto.inputClassName
							}
							placeholder={objecto.inputPlaceHolder}
							required
						/>

						<EtiquetaFontAwesomeIcon
							objectArray={{
								fontAwesomeIcon_CallComponentBool: true,
								fontAwesomeIcon_className:
									"d-flex align-items-center formulario__validacion-estado fas",
								fontAwesomeIcon_icon: inputs[
									objecto.nameInput /* `input_cantidad_${plato.idPlato}` */
								]?.campoValido
									? faCheckCircle
									: faTimesCircle,
							}}
						/>
					</div>
					<p
						className={
							!inputs[objecto.nameInput /* `input_cantidad_${plato.idPlato}` */]
								?.saber &&
							inputs[objecto.nameInput /* `input_cantidad_${plato.idPlato}` */]
								?.error?.error1
								? "invalid-feedback formulario__input-error1-activo"
								: "invalid-feedback formulario__input-error1"
						}
					>
						{objecto.pFormularioInputError1Texto}
					</p>
					<p
						className={
							!inputs[objecto.nameInput /* `input_cantidad_${plato.idPlato}` */]
								?.saber &&
							inputs[objecto.nameInput /* `input_cantidad_${plato.idPlato}` */]
								?.error?.error
								? "invalid-feedback formulario__input-error-activo"
								: "invalid-feedback formulario__input-error"
						}
					>
						{objecto.pFormularioInputErrorTexto}
					</p>
				</div>
			</>
		);
	}
	return <></>;
};

export default EtiquetaInput;
