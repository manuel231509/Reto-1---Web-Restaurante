import React from "react";

const borradorInput = () => {
	return (
		<>
			<div
				className={
					objecto.divClassNameCol
				} /* "col-input col-lg-4 col-md-4 col-sm-4" */
			>
				{/* GRUPO: Cantidad */}
				<div
					id={objecto.divIdGrupo /* "grupo__cantidad_" + plato.idPlato */}
					className="formulario__grupo"
				>
					<label
						htmlFor={objecto.labelHtmlFor}
						className={objecto.labelClassName} /* "formulario__label" */
					>
						{objecto.labelText}
						{/* NOMBRES */}
					</label>
					<div
						className={
							objecto.divClassNameFormularioGrupoInput
						} /* "d-flex flex-row formulario__grupo-input" */
					>
						<input
							id={objecto.inputId /* "input_cantidad-" + plato.idPlato */}
							type={objecto.inputType} /* "text" */
							name={objecto.nameInput /* `input_cantidad_${plato.idPlato}` */}
							value={
								inputs[
									objecto.nameInput /* `input_cantidad_${plato.idPlato}` */
								]?.valor ||
								inicializarInputs(
									objecto.valorInicial,
									objecto.nameInput /* `input_cantidad_${plato.idPlato}` */,
									cargarInputs
								)
							}
							className={
								inputs[
									objecto.nameInput /* `input_cantidad_${plato.idPlato}` */
								]?.campoValido
									? "formulario__input-cantidad formulario__input-check"
									: "formulario__input-cantidad"
							}
							onChange={(e) => handleInputsChange(e, cargarInputs)}
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
						EL CAMPO CANTIDAD ES OBLIGATORIO
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
						EL CAMPO CANTIDAD SOLO PUEDE CONTENER NUMEROS, DEBE SER MAYOR QUE 0.
					</p>
				</div>
			</div>
		</>
	);
};

export default borradorInput;
