import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";

const EtiquetaSelect = ({
	objecto,
	inputs,
	inicializarInputs,
	cargarInputs,
	handleInputsChange,
}) => {
	if (objecto.select_CallComponentBool) {
		return (
			<>
				<div
					className={
						inputs[objecto.nameSelect]?.error.error === false &&
						inputs[objecto.nameSelect]?.error.error1 === false
							? inputs[objecto.nameSelect]?.campoValido
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
						<select
							id={objecto.selectId}
							name={objecto.nameSelect}
							value={
								inputs[objecto.nameSelect]?.valor === undefined
									? inicializarInputs(
											objecto.valorInicial,
											objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */,
											cargarInputs
									  )
									: inputs[objecto.nameSelect].valor
							}
							onChange={(e) => handleInputsChange(e, cargarInputs)}
							className={
								inputs[
									objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */
								]?.campoValido
									? `${objecto.selectClassName} formulario__input-check`
									: objecto.selectClassName
							}
							required
						>
							<option value="" disabled>
								SELECCIONE...
							</option>
							{objecto.opcionesSelect.map((opcion, index) => {
								return (
									<option key={index} value={opcion.value}>
										{opcion.value}
									</option>
								);
							})}
						</select>
						<EtiquetaFontAwesomeIcon
							objectArray={{
								fontAwesomeIcon_CallComponentBool: true,
								fontAwesomeIcon_className:
									"d-flex align-items-center formulario__validacion-estado fas",
								fontAwesomeIcon_icon: inputs[
									objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */
								]?.campoValido
									? faCheckCircle
									: faTimesCircle,
							}}
						/>
					</div>
					<p
						className={
							!inputs[
								objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */
							]?.saber &&
							inputs[objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */]
								?.error?.error1
								? "invalid-feedback formulario__input-error1-activo"
								: "invalid-feedback formulario__input-error1"
						}
					>
						{objecto.pFormularioInputError1Texto}
					</p>
					<p
						className={
							!inputs[
								objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */
							]?.saber &&
							inputs[objecto.nameSelect /* `input_cantidad_${plato.idPlato}` */]
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

export default EtiquetaSelect;
