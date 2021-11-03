import React, { useState } from "react";
import {
	faCheckCircle,
	faMinus,
	faPlus,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import { minus, plus } from "./CardPlatoJS";
import RowAgregarCarrito from "./RowAgregarCarrito";
import {
	handleInputsChange,
	inicializarInputs,
} from "../../Inputs/ValidacionCampos";

const RowCantidad = ({ plato }) => {
	const [inputs, setInputs] = useState({});

	const cargarInputs = (valor, name, validacionCampo, error) => {
		setInputs({
			...inputs,
			[name]: {
				valor: valor,
				campoValido: validacionCampo,
				error: error,
			},
		});
	};
	return (
		<>
			<div className="row">
				<div className="col-minus-input-plus col-lg-12 col-md-12">
					<div className="row">
						<div className="col-minus col-lg-4 col-md-4 col-sm-4">
							<button
								id={"btn_minus-" + plato.idPlato}
								type="button"
								className="btn"
								onClick={() => {
									minus(plato.idPlato, inputs, cargarInputs);
								}}
							>
								<EtiquetaFontAwesomeIcon
									objectArray={{
										fontAwesomeIcon_CallComponentBool: true,
										fontAwesomeIcon_className: "fas",
										fontAwesomeIcon_icon: faMinus,
									}}
								/>
							</button>
						</div>
						<form
							id={"formulario_menu-" + plato.idPlato}
							className="formulario_menu"
							noValidate
						>
							{/* CAMPO CANTIDAD */}
							<div className="col-input col-lg-4 col-md-4 col-sm-4">
								{/* GRUPO: Cantidad */}
								<div
									className={
										inputs[`input_cantidad_${plato.idPlato}`]?.campoValido
											? "formulario__grupo-correcto"
											: "formulario__grupo-incorrecto"
									}
									id={"grupo__cantidad_" + plato.idPlato}
								>
									<div className="d-flex flex-row formulario__grupo-input">
										<input
											type="text"
											id={"input_cantidad-" + plato.idPlato}
											className={
												inputs[`input_cantidad_${plato.idPlato}`]?.campoValido
													? "formulario__input-cantidad formulario__input-check blue-text"
													: "formulario__input-cantidad"
											}
											name={`input_cantidad_${plato.idPlato}`}
											value={
												inputs[`input_cantidad_${plato.idPlato}`]?.valor ||
												inicializarInputs(
													1,
													`input_cantidad_${plato.idPlato}`,
													cargarInputs
												)
											}
											onChange={(e) => handleInputsChange(e, cargarInputs)}
											required
										/>
										<EtiquetaFontAwesomeIcon
											objectArray={{
												fontAwesomeIcon_CallComponentBool: true,
												fontAwesomeIcon_className:
													"d-flex align-items-center formulario__validacion-estado fas",
												fontAwesomeIcon_icon: inputs[
													`input_cantidad_${plato.idPlato}`
												]?.campoValido
													? faCheckCircle
													: faTimesCircle,
											}}
										/>
									</div>
									<p
										className={
											!inputs[`input_cantidad_${plato.idPlato}`]?.saber &&
											inputs[`input_cantidad_${plato.idPlato}`]?.error.error1
												? "invalid-feedback formulario__input-error1-activo"
												: "invalid-feedback formulario__input-error1"
										}
									>
										EL CAMPO CANTIDAD ES OBLIGATORIO
									</p>
									<p
										className={
											!inputs[`input_cantidad_${plato.idPlato}`]?.saber &&
											inputs[`input_cantidad_${plato.idPlato}`]?.error.error
												? "invalid-feedback formulario__input-error-activo"
												: "invalid-feedback formulario__input-error"
										}
									>
										EL CAMPO CANTIDAD SOLO PUEDE CONTENER NUMEROS, DEBE SER
										MAYOR QUE 0.
									</p>
								</div>
							</div>
						</form>
						<div className="col-plus col-lg-4 col-md-4 col-sm-4">
							<button
								id={"btn_plus-" + plato.idPlato}
								type="button"
								className="btn"
								onClick={(e) => {
									plus(plato.idPlato, inputs, cargarInputs);
								}}
							>
								<EtiquetaFontAwesomeIcon
									objectArray={{
										fontAwesomeIcon_CallComponentBool: true,
										fontAwesomeIcon_className: "fas",
										fontAwesomeIcon_icon: faPlus,
									}}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>

			<RowAgregarCarrito plato={plato} inputs={inputs} />
		</>
	);
};

export default RowCantidad;
