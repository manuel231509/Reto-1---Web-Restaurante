import React, { useContext } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import { minus, plus } from "./CardPlatoJS";
import RowAgregarCarrito from "./RowAgregarCarrito";

import Input from "../../Inputs/Input";

import CantidadContext from "../../../contexts/Inputs/InputsContext";
import CantidadProvider from "../../../contexts/Inputs/InputsProvider";
import DatosInputMenuCantidad from "../../../consts json/Menu/DatosInputMenuCantidad.json";

const Row = ({ plato }) => {
	const { inputs, cargarCampos } = useContext(CantidadContext);
	const objeto = DatosInputMenuCantidad;
	Object.assign(objeto, { id: plato.idPlato });
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
								onClick={(e) => {
									e.preventDefault();
									minus(plato.idPlato, inputs, cargarCampos);
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
							<Input key={plato.idPlato} objeto={objeto} />
						</form>
						<div className="col-plus col-lg-4 col-md-4 col-sm-4">
							<button
								id={"btn_plus-" + plato.idPlato}
								type="button"
								className="btn"
								onClick={(e) => {
									e.preventDefault();
									plus(plato.idPlato, inputs, cargarCampos);
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

const RowCantidad = ({ plato }) => {
	return (
		<>
			<CantidadProvider>
				<Row plato={plato} />
			</CantidadProvider>
		</>
	);
};

export default RowCantidad;
